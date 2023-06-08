<?php
// Obter os dados do comentário enviado via POST
$name = $_POST['name'];
$comment = $_POST['comment'];

// Salvar o comentário no banco de dados ou em um arquivo, por exemplo

// Responder com uma mensagem de sucesso ou erro
if ($comment_saved_successfully) {
  echo 'Comentário adicionado com sucesso.';
} else {
  echo 'Erro ao adicionar o comentário.';
}
?>
