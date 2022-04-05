/* Created by: Venika Sem
 * Created on: Mar 2022
 * This file contains the JS functions for index.html 
*/

'use strict'
/**
 * This function calculates the volume of a sphere.
 */
function calculate() {
  // input
  const radiusOfSphere = parseFloat(document.getElementById('radius-of-sphere').value)

   // process
  const volume = (4 / 3) * Math.PI * radiusOfSphere * radiusOfSphere * radiusOfSphere

  // output
  document.getElementById('volume').innerHTML = '<p>The volume is: ' + volume.toFixed(2) + ' cm³</p>'
}