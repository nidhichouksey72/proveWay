
function toggleOptions(element) {
    // Find all bundle boxes
    const bundles = document.querySelectorAll('.bundle-box');
    // Hide all options
    bundles.forEach(bundle => {
        bundle.querySelector('.options').style.display = 'none';
    });
    // Show options for the clicked bundle
    element.querySelector('.options').style.display = 'inline-block';
  

}
function selectBubdle(bundleId){
    document.getElementById(bundleId).checked=true;
}