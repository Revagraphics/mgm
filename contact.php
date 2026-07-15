<?php
header('Content-Type: application/json; charset=utf-8');
// For localhost testing
// header('Access-Control-Allow-Origin: http://localhost:5173');
// For production
header('Access-Control-Allow-Origin: https://mgmhospitalpatna.co.in');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!is_array($data)) {
    $data = $_POST;
}

// =========================
// CLEAN INPUTS
// =========================
$name = isset($data['name']) ? trim(strip_tags($data['name'])) : '';
$phone = isset($data['phone']) ? trim(strip_tags($data['phone'])) : (isset($data['mobile']) ? trim(strip_tags($data['mobile'])) : '');
$department = isset($data['department']) ? trim(strip_tags($data['department'])) : (isset($data['specialization']) ? trim(strip_tags($data['specialization'])) : '');
$message = isset($data['message']) ? trim(strip_tags($data['message'])) : '';
$source = isset($data['source']) ? trim($data['source']) : 'website';

// =========================
// RECEIVER EMAILS
// =========================
$recipients = [
    'mgmhospital0612patna@gmail.com',
    'crm@adsbazaar.in',
];

// =========================
// SUBJECT
// =========================
$subject = 'New Inquiry From MGM Hospital Website';

// =========================
// EMAIL BODY DESIGN (HTML)
// =========================
$body = "
<html>
<body style='margin:0; padding:20px; background:#f4f4f4; font-family:Arial,sans-serif;'>
    <table width='100%' cellpadding='0' cellspacing='0'>
        <tr>
            <td align='center'>
                <table width='auto' cellpadding='0' cellspacing='0' 
                style='background:#ffffff; border-radius:10px; overflow:hidden;'>
                    
                    <!-- HEADER -->
                    <tr>
                        <td style='background:#1e3a8a; padding:20px; text-align:center;'>
                            <h2 style='margin:0; color:#ffffff;'>
                                MGM Hospital & Research Centre
                            </h2>
                        </td>
                    </tr>
                    
                    <!-- CONTENT -->
                    <tr>
                        <td style='padding:30px;'>
                            <h3 style='margin-top:0; color:#1e3a8a;'>
                                New Contact Form Submission
                            </h3>
                            
                            <table width='100%' cellpadding='12' cellspacing='0' 
                            style='border-collapse:collapse;'>
                                
                                <tr>
                                    <td style='border:1px solid #ddd; background:#f9f9f9; width:180px;'>
                                        <strong>Name</strong>
                                    </td>
                                    <td style='border:1px solid #ddd;'>
                                        {$name}
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td style='border:1px solid #ddd; background:#f9f9f9;'>
                                        <strong>Phone</strong>
                                    </td>
                                    <td style='border:1px solid #ddd;'>
                                        {$phone}
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td style='border:1px solid #ddd; background:#f9f9f9;'>
                                        <strong>Department / Specialization</strong>
                                    </td>
                                    <td style='border:1px solid #ddd;'>
                                        {$department}
                                    </td>
                                </tr>
                                " . ($message !== '' ? "
                                <tr>
                                    <td style='border:1px solid #ddd; background:#f9f9f9;'>
                                        <strong>Message</strong>
                                    </td>
                                    <td style='border:1px solid #ddd;'>
                                        {$message}
                                    </td>
                                </tr>
                                " : "") . "
                                <tr>
                                    <td style='border:1px solid #ddd; background:#f9f9f9;'>
                                        <strong>Submitted From</strong>
                                    </td>
                                    <td style='border:1px solid #ddd;'>
                                        {$source}
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td style='border:1px solid #ddd; background:#f9f9f9;'>
                                        <strong>Submitted At</strong>
                                    </td>
                                    <td style='border:1px solid #ddd;'>
                                        " . date('d M Y H:i:s') . "
                                    </td>
                                </tr>
                                
                            </table>
                            
                        </td>
                    </tr>
                    
                    <!-- FOOTER -->
                    <tr>
                        <td style='padding:18px; text-align:center; background:#fafafa; color:#777; font-size:13px;'>
                            This email was sent from MGM Hospital website contact form.
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
";

// =========================
// CLEAN HEADERS (HTML EMAIL)
// =========================
$headers = [];
$headers[] = "From: MGM Hospital <noreply@mgmhospitalpatna.co.in>";
$headers[] = "Reply-To: noreply@mgmhospitalpatna.co.in";
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/html; charset=UTF-8";
$headers[] = "X-Mailer: PHP/" . phpversion();
$headers[] = "Message-ID: <" . time() . rand(1000,9999) . "@mgmhospitalpatna.co.in>";

// =========================
// SEND MAIL TO ALL RECIPIENTS
// =========================
$success = true;

foreach ($recipients as $recipient) {
    if (!mail($recipient, $subject, $body, implode("\r\n", $headers))) {
        $success = false;
    }
}

// =========================
// RESPONSE
// =========================
if ($success) {
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your message has been received. We will contact you soon.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Unable to send your message right now. Please try again later.'
    ]);
}
?>

