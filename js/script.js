/**
 * Created by tuti on 2/23/16.
 */

//var source = $("main-nav").html();
//var template = Handlebars.compile(source);
//
//
//var home_data = {
//    home: "Home", home,
//    link: "index.html"
//}
//var features_data =
//{
//    features:"Features",
//    features_link: "feature.html"
//}
//var about_data
//{
//    about: "About", about_link
//:
//    "about.html"
//}
//
//var html = template(home_data);
//$("top-nav").html(html);
//
//
//
//var html_cover = cover_template()
$(function () {

    $("#input_submit").click(function () {
        var ftp_value = $("#ftp").val();
        console.log(ftp_value);
        var lthr_value = $("#lthr").val();
        console.log(lthr_value);

        var calculations = [

            {end_1: ftp_value * .56},
            {end_2: ftp_value * .75},
            {end_3: lthr_value * .80},
            {end_4: lthr_value * .90},
            {tempo_1: ftp_value * .76},
            {tempo_2: ftp_value * .85},
            {tempo_3: lthr_value * .91},
            {tempo_4: lthr_value * .95},
            {ss_1: ftp_value * .86},
            {ss_2: ftp_value * .95},
            {ss_3: lthr_value * .96},
            {ss_4: lthr_value * .99},
            {threshold_1: ftp_value * .96},
            {threshold_2: ftp_value * 1.05},
            {threshold_3: lthr_value * 1},
            {threshold_4: lthr_value * 1.02},
            {vo2_1: ftp_value * 1.06},
            {vo2_2: ftp_value * 1.20},
            {vo2_3: lthr_value * 1.03},
            {vo2_4: lthr_value * 1.06},
            {anaerobic_1: ftp_value * 1.21},
            {anaerobic_2: ftp_value * 1.50},
            {anaerobic_3: "Over"},
            {anaerobic_4: lthr_value * 1.06},
            {np_2: ftp_value * 1.51}

        ];
        console.log(calculations);
        console.log({calculations:end_1})
        $("#end-1").html(end_1);

    })

});
//var calculations = [
//
//    {end_1: ftp_value * .56},
//    {end_2: ftp_value * .75},
//    {end_3: lthr_value * .80},
//    {end_4: lthr_value * .90},
//    {tempo_1: ftp_value * .76},
//    {tempo_2: ftp_value * .85},
//    {tempo_3: lthr_value * .91},
//    {tempo_4: lthr_value * .95},
//    {ss_1: ftp_value * .86},
//    {ss_2: ftp_value * .95},
//    {ss_3: lthr_value * .96},
//    {ss_4: lthr_value * .99},
//    {threshold_1: ftp_value * .96},
//    {threshold_2: ftp_value * 1.05},
//    {threshold_3: lthr_value * 1},
//    {threshold_4: lthr_value * 1.02},
//    {vo2_1: ftp_value * 1.06},
//    {vo2_2: ftp_value * 1.20},
//    {vo2_3: lthr_value * 1.03},
//    {vo2_4: lthr_value * 1.06},
//    {anaerobic_1: ftp_value * 1.21},
//    {anaerobic_2: ftp_value * 1.50},
//    {anaerobic_3: "Over"},
//    {anaerobic_4: lthr_value * 1.06},
//    {np_2: ftp_value * 1.51}
//
//];