# NN-blackout
Purposefully slows loading of webpages to simulate what the internet would look like without Net Neutrality.

The script will make webpages look like it's loading really slowly and make the images super low resolution somehow and break other things; then after a few seconds a modal will pop saying "This is what the internet would look like without net neutrality... Tell the FCC that you support net neutrality".

The idea is that a ton of individual website owners would be able to just pop this script on their site to "opt-in" to a massive blackout of the web on a specific day. If they ever wanted to "opt-out" (say after we've won the internet back, or if they are concerned that it would go down on important days) they would just need to remove the call to this script.

<h3>Ideas for "breaking websites":</h3>
<ul>
<li>slow loading of all assets</li>
<li>reduce image resolutions?</li>
<li>break other parts?</li>
</ul>

https://www.reddit.com/r/technology/comments/6bytpx/sopa_pipa_cispa_acta_tpp_itu_cispa_again_tafta_we/dhqybzv/

<h3>Installation</h3>

Simply copy/paste this script into any page(s) of your website to "opt-in"
<pre><script src="https://rawgit.com/panxzz/NN-blackout/master/blackout.js"></script></pre>
By leaving this script on your site you are already covered, your site will "break" then display the modal message on the specified blackout date.

To test what your site will look like you can use this script:
<pre><script src="https://rawgit.com/panxzz/NN-blackout/master/blackout-test.js"></script></pre>
This script will not check for the blackout and act like the blackout is always active.