var people = [];
function submit(){
    var display_people = []
    for (var i = 1; i <= 4; i++){
        var name_of_the_student = document.getElementById("name_of_the_student_"+i).value;
        console.log(name_of_the_student);
        people.push(name_of_the_student);
    }
    console.log(people);
    var length_people = people.length;
    console.log(length_people);
    for (var o = 0; o < length_people; o++){
        display_people.push("<h4>NAME - "+ people[o] + "</h4>");
        console.log(display_people);
    }
    console.log(display_people);
    document.getElementById("display_name_with_commas").innerHTML = display_people;
    var bye_bye_commas = display_people.join(" ");
    console.log(bye_bye_commas);
    document.getElementById("display_name_without_commas").innerHTML = bye_bye_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline_block";
    window.alert("ALERT");
}
function sorting(){
    people.sort();
    console.log(people);
    var sort_people = [];
    var length_people = people.length;
    console.log(length_people);
    for (var u = 0; u < length_people; u++){
        sort_people.push("<h4>NAME - "+ people[u] + "</h4>");
        console.log(sort_people);
    }
    var bye_bye_commas = sort_people.join(" ");
    console.log(bye_bye_commas);
    document.getElementById("display_name_without_commas").innerHTML = bye_bye_commas;
    document.getElementById("submit_button").style.display="inline_block";
    document.getElementById("sort_button").style.display="none";
}