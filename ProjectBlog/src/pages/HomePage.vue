<template>
	<div>
		<page-header 
			title="Clean Blog"
		/>
		<blog-list />
	</div>
</template>

<script>
import PageHeader from "../components/PageHeader";
import BlogList from '../components/BlogList';
export default {
    name: 'home-page',
	components: {
		PageHeader,
		BlogList
	}
}
</script>

<style>

</style>