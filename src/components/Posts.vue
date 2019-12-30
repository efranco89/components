<template>
  <div class="container">
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Titulo</th>
          <th scope="col">Body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post">
          <td>{{ post.id }} </td>
          <td>{{ post.titulo }}  </td>
          <td>{{ post.body }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
  export default {
    name: 'PostExample',
    data(){
      return {
        posts: [
          { id: 1, titulo: 'Post 1', body: "This is sparta" },
          { id: 2, titulo: 'Post 2', body: "This is athens" },
          { id: 3, titulo: 'Post 3', body: "This is santorini" },
          { id: 4, titulo: 'Post 4', body: "This is athos" }
        ]

      }
    }
  }
</script>


<style scoped>
  
</style>