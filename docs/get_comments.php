<?php
// Obter os comentários existentes do banco de dados ou arquivo, por exemplo

// Formatar os comentários como HTML
$comments_html = '';

foreach ($comments as $comment) {
  $comments_html .= '<div>';
  $comments_html .= '<h4>' . $comment['name'] . '</h4>';
  $comments_html .= '<p>' . $comment['comment'] . '</p>';
  $comments_html .= '</div>';
}

// Responder com os comentários formatados
echo $comments_html;
?>
