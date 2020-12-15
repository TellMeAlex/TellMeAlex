const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = Array(progressBarCapacity)
        .fill('▁')
        .map((value, index) => index < passedProgressBarIndex ? '█' : value)
        .join('')
    return `{ ${progressBar} }`
}

const readme = `\
# Hi there <img src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Hi.gif" width="29px"> I'm [Alejandro](https://alexdrago.dev) 👨‍💻


<p align="center">
<img src="https://camo.githubusercontent.com/992babdffd8c74a1502de375fbdf7e4d54773242/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f53576f536b4e36447854737a71494b4571762f67697068792e67696" alt="me"/> 
</p>
![](https://camo.githubusercontent.com/992babdffd8c74a1502de375fbdf7e4d54773242/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f53576f536b4e36447854737a71494b4571762f67697068792e676966)

<p align="center">
<img src="https://devicons.github.io/devicon/devicon.git/icons/html5/html5-original.svg" alt="Html" width="55" height="55"/> 
<img src="https://devicons.github.io/devicon/devicon.git/icons/css3/css3-original.svg" alt="CSS" width="55" height="55"/> 
<img src="https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg" alt="javascript" width="55" height="55"/> 
<img src="https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original.svg" alt="nodejs" width="55" height="55"/> 
<img src="https://devicons.github.io/devicon/devicon.git/icons/php/php-original.svg" alt="php" width="55" height="55"/> 
<img src="https://devicons.github.io/devicon/devicon.git/icons/symfony/symfony-original.svg" alt="symfony" width="55" height="55"/> 
<img src="https://devicons.github.io/devicon/devicon.git/icons/composer/composer-original.svg" alt="composer" width="55" height="55"/> 
<img src="https://devicons.github.io/devicon/devicon.git/icons/java/java-original-wordmark.svg" alt="java" width="55" height="55"/> 
<img src="https://devicons.github.io/devicon/devicon.git/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="55" height="60"/> 
<img src="https://devicons.github.io/devicon/devicon.git/icons/docker/docker-original-wordmark.svg" alt="docker" width="45" height="40"/> 
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" alt="GIT" width="45" height="45"/> 
</p>

---
### 🐱My Github stats:
![alexdrago github stats](https://github-readme-stats.vercel.app/api?username=alexdrago&show_icons=true&title_color=ffc857&icon_color=8ac926&text_color=daf7dc&bg_color=151515&hide=["stars"])
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=alexdrago&layout=compact&text_color=daf7dc&bg_color=151515)](https://github.com/anuraghazra/github-readme-stats)

⏳ **Year Progress** ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} % as on ⏰ ${new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear()+'.'}
<!--START_SECTION:waka-->

<!--END_SECTION:waka-->



### 😜Here's a Joke for you:
<img src="https://readme-jokes.vercel.app/api" alt="Jokes Card" />
`
console.log(readme)
