$(document).ready(()=>{

    $('#img_predict').change(function(){
      
        const file = this.files[0];

      if (file){

        let reader = new FileReader();
        reader.onload = function(event){
          $('#img_preview').attr('src', event.target.result);
        }
        reader.readAsDataURL(file);

      }
    });

  });