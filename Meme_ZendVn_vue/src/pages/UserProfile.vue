<template>
    <div class="ass1-login">
        <div class="ass1-login__content">
            <p>Profile</p>

            <div class="ass1-login__form">
                <div class="avatar">
                    <img :src="getAvatar" alt="">
                </div>
                <form action="#" v-if="currentUser" @submit.prevent="handleEditProfile">
                    <input 
                        :value="currentUser.fullname"
                        @input="fullname = $event.target.value"
                        type="text" class="form-control" placeholder="Tên ..." required="">
                    
                    <select
                        :value="currentUser.gender"  
                        @change="gender = $event.target.value"
                        class="form-control">
                        <option value="">Giới tính</option>
                        <option value="nam">Nam</option>
                        <option value="nu">Nữ</option>
                    </select>
                    <input 
                        @change="uploadAvatar"
                        type="file" name="avatar"  placeholder="Ảnh đại diện" class="form-control">
                    <textarea 
                        :value="currentUser.description"
                        @input="description = $event.target.value"
                        class="form-control" cols="30" rows="5" placeholder="Mô tả ngắn ..."></textarea>

                    <div class="ass1-login__send justify-content-center">
                        <button type="submit" class="ass1-btn">Cập nhật</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: 'user-profile',
    data() {
        return {
            fullname: '',
            description: '',
            gender: '',
            avatar: {
                objFile: null,
                base64URL: ''
            },
            userid: this.$route.params.id
        }
    },
    watch: {
        $route(to, from) {
            this.userid = to.params.id;
            this.checkIsCurrentUser();
        }
    },
    created() {
        this.checkIsCurrentUser();
    },
    computed: {
        ...mapGetters([
            'currentUser'
        ]),
        getAvatar() {
            if (this.avatar.base64URL === '' && this.currentUser) {
                return this.currentUser.profilepicture;
            } else {
                return this.avatar.base64URL;
            }
        }
    },
    methods: {
        ...mapActions([
            'updateProfile'
        ]),
        checkIsCurrentUser() {
            if (this.userid && this.currentUser) {
                if (this.userid != this.currentUser.USERID) {
                   this.$router.push('/'); 
                }
            }
        },
        handleEditProfile(e) {
            console.log(e);
            console.log(this.fullname);
            console.log(this.description);
            console.log(this.gender);

            if (!this.gender) {
                this.gender = this.currentUser.gender
            }
            if (!this.fullname) {
                this.fullname = this.currentUser.fullname
            }
            if (!this.description) {
                this.description = this.currentUser.description
            }
            if (this.fullname && this.description && this.gender) {
                let data = {
                    fullname: this.fullname,
                    description: this.description,
                    gender: this.gender
                }

                if (this.avatar.objFile) {
                    data.objFile = this.avatar.objFile;
                }
                // ham async co the .then() de lay response tra ve
                this.updateProfile(data).then(res => {
                    // console.log(res);
                    if (res.ok) {
                        alert('Update profile success');
                    } else {
                        alert(res.error);
                    }
                });
            }
        },
        uploadAvatar(e) {
            var vueInstance = this;
            if (e.target.files && e.target.files.length) {
                const fileAvatar = e.target.files[0];
                console.log(fileAvatar);

                let reader = new FileReader();

                reader.addEventListener("load", () => {
                    // lien quan den ES6: phai su dung arrow function thi moi rang buoc duoc bien 'this' cua Vue vao de su dung
                    // console.log(vueInstance.avatar.base64URL);
                    // console.log(this.avatar.base64URL);

                    // Hoac: khai bao lai bien $this cua Vue o ben ngoai de su dung
                    // convert image file to base64 string
                    let previewSrc = reader.result;
                    this.avatar.base64URL = previewSrc;
                    this.avatar.objFile = fileAvatar;
                }, false);

                if (fileAvatar) {
                    reader.readAsDataURL(fileAvatar);
                }
            }
        }
    }
}
</script>

<style scoped>
    .avatar {
        border-radius: 50%;
        overflow: hidden;
    }
</style>