import React from 'react';
import './style.css';

export default function Page() {
    return (
        <div>
            <header>
                <img src="/img/IMG_6691.jpg" alt="profile" className="profile-img" />
                <h1>Hi 👋, I'm Thanachok Suwan</h1>
                <h3>A frontend developer from Thanachok</h3>
            </header>
            <div className="container">
                <div className="info">
                    <ul>
                        <li>🔭 I'm studying <strong>KhonKhan University</strong></li>
                        <li>🌱 I want to learn <strong>Javascript</strong></li>
                        <li>📫 How to reach me: <strong>thanachok.suwan@gmail.com</strong></li>
                        <li>ID Student:<strong>653450287-7</strong></li>
                        <li>Frontend 1: <a className="button-front" href="https://github.com/thanachok11/front-end-1.git">Click</a></li>
                        <li>OOP Work 1: <a className="button-oop" href="https://github.com/thanachok11/Final-Project.Boss-1.git">Click</a></li>
                    </ul>
                </div>
                <div className="connect">
                    <h3>Connect with me:</h3>
                    <a href="https://twitter.com/thanachok11" target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="Twitter" height="30" width="40" />
                    </a>
                    <a href="https://fb.com/thanachokboss" target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="Facebook" height="30" width="40" />
                    </a>
                    <a href="https://instagram.com/bosstha__" target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="Instagram" height="30" width="40" />
                    </a>
                </div>
                <div className="skills">
                    <h3>Languages and Tools:</h3>
                    <a href="https://www.cprogramming.com/" target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="C" width="40" height="40" />
                    </a>
                    <a href="https://www.w3schools.com/cs/" target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="C#" width="40" height="40" />
                    </a>
                    <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" width="40" height="40" />
                    </a>
                    <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
                        <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="Figma" width="40" height="40" />
                    </a>
                    <a href="https://www.w3.org/html/" target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" width="40" height="40" />
                    </a>
                    <a href="https://www.adobe.com/in/products/illustrator.html" target="_blank" rel="noopener noreferrer">
                        <img src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="Illustrator" width="40" height="40" />
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40" />
                    </a>
                    <a href="https://www.photoshop.com/en" target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="Photoshop" width="40" height="40" />
                    </a>
                    <a href="https://www.php.net" target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="PHP" width="40" height="40" />
                    </a>
                    <a href="https://www.python.org" target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" width="40" height="40" />
                    </a>
                    <a href="https://unity.com/" target="_blank" rel="noopener noreferrer">
                        <img src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg" alt="Unity" width="40" height="40" />
                    </a>
                </div>
                <div className="stats">
                    <p>
                        <img src="https://github-readme-stats.vercel.app/api/top-langs?username=thanachok11&show_icons=true&locale=en&layout=compact" alt="Top Languages" />
                    </p>
                    <p>
                        <img src="https://github-readme-stats.vercel.app/api?username=thanachok11&show_icons=true&locale=en" alt="GitHub Stats" />
                    </p>
                </div>
            </div>
        </div>
    );
}
