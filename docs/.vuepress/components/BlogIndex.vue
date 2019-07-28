<!-- /.vuepress/components/BlogIndex.vue -->

<template>
<div>
    <div v-for="post in posts">
        <h2>
            <router-link :to="post.path" style="text-decoration: none;" class="article-title">{{ post.frontmatter.title }}</router-link>
        </h2>
        
        <p>{{ post.frontmatter.date }}</p> 

        <p>{{ post.frontmatter.description }}</p> <br> 
        <!-- <p >Estimated time: {{ post.readingTime }}</p> <br> -->

        <router-link style="text-decoration: none;" class="read-more-btn link" tag="a" :to="post.path">Read more</router-link>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        posts() {
            return this.$site.pages
                .filter(x => x.path.startsWith('/blog/') && !x.frontmatter.blog_index)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    }
}
</script>

<style> 
link {
    text-decoration: none !important;
}

/* .article-title {
    color: darkgoldenrod; 
}
.article-title:hover {
    color: goldenrod;
    text-decoration-line: none;
    text-decoration: none;
} */
.read-more-btn {
    padding: 0.5rem;
    border-radius: 0.25rem; 
    background-color:#E77728;
    color: white;
    font-size: 1rem;
     border: 1px #E77728 solid; 
    transition: background-color 0.05s ease-in, color 0.05s ease-in;

}

.read-more-btn:hover {
    padding: 0.5rem;
    border-radius: 0.25rem; 
    background-color: white;
    color: #E77728;
    font-size: 1rem;
    border: 1px #E77728 solid;
    transition: background-color 0.05s ease-in, color 0.05s ease-in;
    text-decoration: none;
}

</style> 