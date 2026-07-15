<?php
/**
 * ValoCross — indirme sayacı + yönlendirme
 * Klasör: public_html/indir.valocross.com/
 *
 * Bu dosyaya giden her istek sayacı +1 yapar ve .exe'ye yönlendirir.
 */
declare(strict_types=1);

header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: no-referrer');

$countFile = __DIR__ . '/download-count.json';
$rateFile = __DIR__ . '/download-rate.json';
$exeName = 'DijitalCrosshair-Setup.exe';
$exePath = __DIR__ . '/' . $exeName;

// Aynı IP 30 sn içinde tekrar tıklarsa sayma (yenileme / çift tık)
$ip = $_SERVER['HTTP_CF_CONNECTING_IP']
    ?? $_SERVER['HTTP_X_FORWARDED_FOR']
    ?? $_SERVER['REMOTE_ADDR']
    ?? 'unknown';
if (str_contains((string) $ip, ',')) {
    $ip = trim(explode(',', (string) $ip)[0]);
}
$ipKey = hash('sha256', $ip);
$now = time();
$shouldCount = true;

$rateFp = fopen($rateFile, 'c+');
if ($rateFp) {
    flock($rateFp, LOCK_EX);
    $raw = stream_get_contents($rateFp);
    $rates = $raw ? (json_decode($raw, true) ?: []) : [];
    if (!is_array($rates)) {
        $rates = [];
    }
    // Eski kayıtları temizle (> 1 saat)
    foreach ($rates as $k => $ts) {
        if (!is_int($ts) || $now - $ts > 3600) {
            unset($rates[$k]);
        }
    }
    if (isset($rates[$ipKey]) && ($now - (int) $rates[$ipKey]) < 30) {
        $shouldCount = false;
    } else {
        $rates[$ipKey] = $now;
    }
    ftruncate($rateFp, 0);
    rewind($rateFp);
    fwrite($rateFp, json_encode($rates, JSON_UNESCAPED_UNICODE));
    fflush($rateFp);
    flock($rateFp, LOCK_UN);
    fclose($rateFp);
}

if ($shouldCount) {
    $fp = fopen($countFile, 'c+');
    if ($fp) {
        flock($fp, LOCK_EX);
        $raw = stream_get_contents($fp);
        $data = $raw ? (json_decode($raw, true) ?: []) : [];
        if (!is_array($data)) {
            $data = [];
        }
        $count = isset($data['downloads']) ? (int) $data['downloads'] : 0;
        $count++;
        $data = [
            'downloads' => $count,
            'updatedAt' => gmdate('c'),
        ];
        ftruncate($fp, 0);
        rewind($fp);
        fwrite($fp, json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
        fflush($fp);
        flock($fp, LOCK_UN);
        fclose($fp);
    }
}

if (!is_file($exePath)) {
    http_response_code(404);
    header('Content-Type: text/plain; charset=utf-8');
    echo 'Kurulum dosyası bulunamadı.';
    exit;
}

header('Location: ./' . rawurlencode($exeName), true, 302);
exit;
