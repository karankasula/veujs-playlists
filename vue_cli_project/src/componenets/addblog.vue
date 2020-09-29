<template>
    <div id="add-blog">
        <h2>Add New Blog Post
        </h2>
        <form>
            <label>Blog title</label>
            <input type="text" v-model="blog.title" required/>
            <label>Blog Content:</label>
            <textarea v-model="blog.content"></textarea>
            <div id="checkboxes">
                <label>male</label>
                <input type="checkbox" value="male" v-model="blog.categories"/>
                <label>female</label>
                <input type="checkbox" value="female" v-model="blog.categories"/>
                <label>other</label>
                <input type="checkbox" value="other" v-model="blog.categories"/>
            </div>
            <label>slectbox</label>
            <select v-model="blog.gender">
                <option v-for="gender in genders">{{gender}}</option>
                <!-- <option></option>
                <option></option> -->
            </select>
        </form>
        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog Title:{{blog.title}}</p>
            <p>Blog content:{{blog.content}}</p>
           <!-- checkbox binding -->
            <p>gender:</p>
            <ul>
                <li v-for="category in blog.categories">
                    {{category}}
                </li>
            </ul>
            <p>selectbox_gender:{{blog.gender}}</p>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
        blog:{
            title:"",
            content:"",
            categories:[],
            gender:""
        },
        genders:['male','female','other']
      
    }
  }
}
</script>