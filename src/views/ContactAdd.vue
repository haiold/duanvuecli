<template>
    <div class = "add-form">
        <div>
            <h4>Thêm liên hệ</h4>
            <ContactForm
            :contact="contact"
            @contact-submit="createContact"
            />
        </div>   
    </div>
</template>
<script>
import ContactService from "../services/contact.service";
import ContactForm from "../components/ContactForm";

export default{
    name:"ContactAdd",
    components: {
        ContactForm,
    },
    data(){
        return{
            contact:{},
            message:"",
        };
    },
    methods:{
        async createContact(data){
            const [error,respone] = await this.handle(ContactService.create(data));
            if(error){
                console.log(error);

            }else{
                console.log(respone.data);
                this.message="Liên hệ được đệ trình thành công.";

            }
        },

    },
}

</script>