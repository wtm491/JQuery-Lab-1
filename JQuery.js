$(()=> {


    $(".table").hover(
     function(){
         if($(this).hasClass('open')){
             $(this).css('box-shadow', 'inset 0 0 0 12px #008000');
             $(this).css("cursor", "cell");
         }
         if($(this).hasClass('reserved')){
             $(this).css('cursor', 'not-allowed');
             $(this).css('box-shadow', 'inset 0 0 0 10px #E34E45');
         }
     },
     function(){
         $(this).css('box-shadow', 'none');
     }
    );


    $('.table').on('click', function(event){
      let tableNumber;
      if ($(this).hasClass('reserved')===true){
        $('#reservedTable').show();

        $('.exitButton').on('click', ()=>{
          $('#reservedTable').hide();
        })
        $('.clear').on('click', ()=> {
          $(this).removeClass('reserved');
          $(this).addClass('open');
          $('#reservedTable').hide();
        });
      }

      else if ($(this).hasClass('open')===true){
        tableNumber = $(event)["0"].currentTarget.childNodes["0"].data;
        $('#formContainer').show();

        $('.tableNumber').append(`${tableNumber}`);
        $('.saveButton').on('click', ()=> {
          let name = $('.name').val();
          let number = $('.number').val();
          let people = $('.people').val();
          let table = {
            "name": name,
            "number": number,
            "people": people
          };


          $(this).removeClass('open');
          $(this).addClass('reserved');
          $('#formContainer').hide();
          $('#confirmation').show();
          $('.exitButton').on('click', ()=>{
            $('#confirmation').hide();

          })
        })


        $('.exitButton').on('click', ()=>{
          $('#formContainer').hide();
        });
      };

    });

});
