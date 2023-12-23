<template>
    <b-container>
        <b-form class="pt-5 pb-5">
            <b-form-group
                label="Email address:"
                description="We'll never share your email with anyone else."
            >
                <b-form-input
                    type="email"
                    placeholder="Enter email"
                >
                </b-form-input>
            </b-form-group>

            <b-form-group
                label="Password"
                description="We'll never share your email with anyone else."
            >
                <b-form-input
                    type="password"
                    placeholder="Enter password"
                >
                </b-form-input>
            </b-form-group>
        </b-form>
    </b-container>
</template>

<script>
export default {
    name: 'login'
}
</script>

<style>

</style>