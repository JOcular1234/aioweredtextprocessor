import React from 'react'

export default function Footer() {
    let year = new Date().getFullYear()
  return (
    <div>
        <footer>
    <div className="logos">© {year} <a href="index.html">Tino<span>Hub.</span></a> All rights reserved.</div>
    <div class="social-links">
        <a href="http://github.com/JOcular1234"><span><i class="fa-brands fa-github"></i>
        </span>GitHub</a>
        <a href="http://www.linkedin.com/in/mfonobong-umoh1"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
        <a href="https://x.com/realmfonumoh?t=BtIDQtIu5_dHWeTFuk6_AQ&s=09"><i class="fa-brands fa-twitter"></i> Twitter</a>
    </div>
</footer>
    </div>
  )
}
