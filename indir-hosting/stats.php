<?php
/**
 * ValoCross — indirme sayısı (JSON)
 * GET https://indir.valocross.com/stats.php
 */
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$countFile = __DIR__ . '/download-count.json';
$count = 0;
$updatedAt = null;

if (is_file($countFile)) {
    $raw = file_get_contents($countFile);
    $data = $raw ? json_decode($raw, true) : null;
    if (is_array($data)) {
        $count = isset($data['downloads']) ? (int) $data['downloads'] : 0;
        $updatedAt = $data['updatedAt'] ?? null;
    }
}

echo json_encode([
    'ok' => true,
    'downloads' => $count,
    'updatedAt' => $updatedAt,
], JSON_UNESCAPED_UNICODE);
