$(document).ready(function() {
    // Carregar os comentários existentes
    loadComments();
  
    // Enviar comentário
    $('#comment-form').submit(function(e) {
      e.preventDefault();
  
      // Obter os valores dos campos do formulário
      var name = $('#name').val();
      var comment = $('#comment').val();
  
      // Fazer uma requisição AJAX para adicionar o comentário
      $.ajax({
        url: 'add_comment.php', // Arquivo PHP para adicionar o comentário
        type: 'POST',
        data: { name: name, comment: comment },
        success: function(response) {
          // Limpar os campos do formulário
          $('#name').val('');
          $('#comment').val('');
  
          // Carregar os comentários atualizados
          loadComments();
        }
      });
    });
  
    // Função para carregar os comentários existentes
    function loadComments() {
      $.ajax({
        url: 'get_comments.php', // Arquivo PHP para obter os comentários
        type: 'GET',
        success: function(response) {
          // Exibir os comentários na área apropriada
          $('#comment-section').html(response);
        }
      });
    }
  });
  