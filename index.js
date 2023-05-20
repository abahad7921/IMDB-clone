  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

var movies = [
    {Name:"Temp Movie", Description:"jubcvgviufgvbeiovugbefv ufbv"},
    {Name:"Temp Movie", Description:"jubcvgviufgvbeiovugbefv ufbv"},
    {Name:"Temp Movie", Description:"jubcvgviufgvbeiovugbefv ufbv"},
    {Name:"Temp Movie", Description:"jubcvgviufgvbeiovugbefv ufbv"},
    {Name:"Temp Movie", Description:"jubcvgviufgvbeiovugbefv ufbv"},
    {Name:"Temp Movie", Description:"jubcvgviufgvbeiovugbefv ufbv"},
    {Name:"Temp Movie", Description:"jubcvgviufgvbeiovugbefv ufbv"},
    {Name:"Temp Movie", Description:"jubcvgviufgvbeiovugbefv ufbv"},
    {Name:"Temp Movie", Description:"jubcvgviufgvbeiovugbefv ufbv"},
    {Name:"Temp Movie", Description:"jubcvgviufgvbeiovugbefv ufbv"},
    {Name:"Temp Movie", Description:"jubcvgviufgvbeiovugbefv ufbv"},
    {Name:"Temp Movie", Description:"jubcvgviufgvbeiovugbefv ufbv"},
    {Name:"Temp Movie", Description:"jubcvgviufgvbeiovugbefv ufbv"},
    {Name:"Temp Movie", Description:"jubcvgviufgvbeiovugbefv ufbv"},
    {Name:"Temp Movie", Description:"jubcvgviufgvbeiovugbefv ufbv"},
    {Name:"Temp Movie", Description:"jubcvgviufgvbeiovugbefv ufbv"},
]

movies.forEach(element => {
    let newCol = `<div class="col-sm-6 col-md-4 col-lg-3 py-3">
    <div class="card box-shadow">
        <img class="card-img-top" src="movie-img.jpg" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${element.Name}</h5>
            <p class="card-text">${element.Description}</p>
        </div>
        <div class="card-footer">
        <div class="row">
        <div class="col-sm-6 col-md-4">
            <div class="btn-group">
                <a href="#" class="btn btn-primary button" data-toggle="modal" data-target="#exampleModal">Explore</a>
            </div>
        </div>
        <div class="col-sm-6 col-md-4">
            <div class="btn-group">
                <button type="button" class="btn btn-primary button">
                    <span class="material-symbols-outlined">
                        edit
                    </span>
                </button>
            </div>
        </div>
        <div class="col-sm-12 col-md-4">
            <div class="btn-group">
                <button type="button" class="btn btn-danger button">
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                </button>
            </div>
        </div>
    </div>
        </div>
    </div>
    </div>`

    $("#row").append(newCol);

});

let actors = [
    {Name:"Salman Khan"},
    {Name:"Akshay Kumar"},
    {Name:"Ajay Devgan"}
]

actors.forEach(element => {
    $("#exampleInputActors").append(`<option>${element.Name}</option>`)
});

let producers = [
    {Name:"SS RajaMouli"},
    {Name:"Sajid Nadiadwala"}   
]

producers.forEach(element => {
    $("#exampleInputProducer").append(`<option>${element.Name}</option>`)
});

let genres = [
    {Name:"Comedy"},
    {Name:"Action"},
    {Name:"Mystery Thriller"},
    {Name:"Horror"}      
]
genres.forEach(element => {
    $("#exampleInputGenre").append(`<option>${element.Name}</option>`)
});

$("#save-actor").click(function(){
    console.log("save button clicked");
    let actorName = $("#actor-name").val()
    let actorDob = $("#actor-dob").val()
    console.log(actorName + "  and dob = " + actorDob + " type = " + typeof(actorDob) + " " + actorDob.length)
    //add the new actor to the list and also show it in the dropdown menu
    if(actorName.length > 0 && actorDob.length > 0){
        actors.push({Name:actorName});
        let successAlertCode = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Nice!</strong> New actor has been added in the system
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
        $("#actor-modal-body").prepend(successAlertCode);
        $("#exampleInputActors").append(`<option>${actors[actors.length-1].Name}</option>`)
    }
    else
        console.log("please enter valid name")
    //console.log(actors)
    

})

$("#save-producer").click(()=>{
    console.log("save producer button clicked")
    let producerName = $("#producer-name").val()
    let producerDob = $("#producer-dob").val()
    console.log(producerName)

    if(producerName.length > 0 && producerDob.length > 0){
        producers.push({Name:producerName})
        //when the producer is successfully added then display the success alert
        let successAlertCode = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Nice!</strong> New producer has been added in the system
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`

      $("#producer-modal-body").prepend(successAlertCode)
      $("#exampleInputProducer").append(`<option>${producers[producers.length-1].Name}</option>`)
    }
    else
        console.log("please enter valid name")
    
})