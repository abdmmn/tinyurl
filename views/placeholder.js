



<!-- <% for (let id in urls) { %>
  <tr>
    <td>
      <%= url %>
    </td>
    <td>
      <%= urls[url].longURL%> -->
    </td>
    <!-- <td>
      <form method="POST" action="/urls/<%= url %>">
        <a href="/urls/<%= url %>"
          style=" color:blue; background-color: white; padding: 0.25em; border: 0.1em solid blue; border-radius: 0.3em;">Edit</a>
      </form>
    </td>
    <td>
      <form method="POST" action="/urls/<%= url %>/delete">
        <input type="submit" value="Delete" name="shortURL"
          style=" color: red; background-color: white; border: 0.1em solid red; border-radius: 0.3em;">
      </form>
    </td> -->

    
<!-- <% } %>     -->



<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS-->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
    integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
  <title>TinyApp</title>

</head>

<body>
  <%- include('partials/_header') %>
    <main style="margin: 1em;">
        <thead>
      <h3>My URLs</h3>
      <table class="table">
          <tr>
            <th scope="col">Short URL</th>
            <th scope="col">Long URL</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <% for(let url in urls) { %>
            <tr>
              <td>
                <%= url %>
              </td>
              <td>
                <%= urls[url].longURL%>
              </td>
              <td>
                <!-- <form method="POST" action="/urls/<%= url %>"> -->
                  <a href="/urls/<%= url %>"
                    style=" color:blue; background-color: white; padding: 0.25em; border: 0.1em solid blue; border-radius: 0.3em;">Edit</a>
                <!-- </form> -->
              </td>
              <td>
                <form method="POST" action="/urls/<%= url %>/delete">
                  <input type="submit" value="Delete" name="shortURL"
                    style=" color: red; background-color: white; border: 0.1em solid red; border-radius: 0.3em;">
                </form>
              </td>
            
            <% } %>
        </tbody>
      </table>
    </main>
    <!-- Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"></script>

</body>

</html>








