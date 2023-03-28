import { categories } from 'const'
import { Resource } from 'types'

const { programming, toolsAndUtilities, jobs, uiDesign, community, infrastructure } = categories

export const resources: Resource[] = [
    {
        name: 'W3Bits',
        categories: [community.personalWebsites],
        url: 'https://w3bits.com',

        description: 'Tips about frontend web development.',
        keywords: ['frontend', 'web development tips'],
    },
    {
        name: 'W3Layouts',
        categories: [programming.templates],
        description: 'W3layouts is an online store to download website templates for all types of businesses.',
        url: 'https://w3layouts.com/',
        icon: 'https://w3lcdn.w3layouts.com/wp-content/uploads/2020/11/cropped-w3layouts-logo-512-32x32.png',
    },
    {
        name: 'W3Schools',
        categories: [programming.learn],
        description:
            'W3Schools is a training website for learning web technologies online. Content includes tutorials and references relating to HTML, CSS, JavaScript, JSON, PHP, Python, AngularJS, React.js, SQL, Bootstrap, Sass, Node.js, jQuery, XQuery, AJAX, XML, Raspberry Pi, C++, C# and Java.',
        keywords: [
            'HTML',
            'CSS',
            'JavaScript',
            'DOM',
            'jQuery',
            'PHP',
            'SQL',
            'XML',
            'Python',
            'Java',
            'Bootstrap',
            'Web',
            'W3CSS',
            'W3C',
            'tutorials',
            'programming',
            'development',
            'training',
            'learning',
            'quiz',
            'primer',
            'lessons',
            'reference',
            'examples',
            'source code',
            'colors',
            'demos',
            'tips',
            'w3c',
        ],
        url: 'https://www.w3schools.com/',
        icon: 'https://www.w3schools.com/favicon.ico',
    },
    {
        name: 'Wappalyzer',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description:
            'Find out the technology stack of any website. Create lists of websites and contacts by the technologies they use.',
        url: 'https://www.wappalyzer.com/',
        icon: 'https://www.wappalyzer.com/apple-touch-icon.png',
    },
    {
        name: 'Warrant',
        categories: [infrastructure.auth],
        description: 'Hosted enterprise-grade authorization and access control service for your apps.',
        url: 'https://warrant.dev/',
        icon: 'https://warrant.dev/images/logo-primary.svg',
        keywords: ['auth', 'authorization', 'authz', 'access control'],
    },
    {
        name: 'Wave',
        categories: [toolsAndUtilities.general],
        description: 'Free invoicing & accounting software with credit card processing & payroll services.',
        url: 'https://www.waveapps.com/',
        icon: 'https://www.waveapps.com/assets/img/icons/favicon-32x32.png',
    },
    {
        name: 'WAVE',
        categories: [toolsAndUtilities.accessibility],
        description:
            'WAVE is a suite of evaluation tools that helps authors make their web content more accessible to individuals with disabilities. WAVE can identify many accessibility and Web Content Accessibility Guideline (WCAG) errors, but also facilitates human evaluation of web content.',
        url: 'https://wave.webaim.org/',
        icon: 'https://wave.webaim.org/favicon.ico',
    },
    {
        name: 'Web Design Inspiration',
        categories: [uiDesign.inspiration],
        description:
            'Visit the #1 Inspiration Gallery. Everyday, we help Webdesigners, Agencies and Entrepreneurs to be inspired for their next web design project.',
        url: 'https://www.webdesign-inspiration.com/',
        icon: 'https://www.webdesign-inspiration.com/favicon.ico',
    },
    {
        name: 'We Work Remotely',
        categories: [jobs.remoteOnly],
        description:
            "Find the most qualified people in the most unexpected places: Hire remote! We Work Remotely is the best place to find and list remote jobs that aren't restricted by commutes or a particular geographic area. Browse thousands of remote work jobs today.",
        url: 'https://weworkremotely.com/',
        icon: 'https://weworkremotely.com/favicon-96x96.png',
    },
    {
        name: 'Web Developer',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description: 'Download the Web Developer extension for Chrome and Firefox.',
        url: 'https://chrispederick.com/work/web-developer/',
        icon: 'https://cdn.chrispederick.net/images/7.2/logos/256.png',
    },
    {
        name: 'Web Developer Checklist',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description: 'Analyses any web page for violations of best practices.',
        url: 'https://chrome.google.com/webstore/detail/web-developer-checklist/iahamcpedabephpcgkeikbclmaljebjp?hl=en',
        icon: 'https://ssl.gstatic.com/chrome/webstore/images/icon_96px.png',
    },
    {
        name: 'web.dev - Lighthouse',
        categories: [toolsAndUtilities.performance],
        description: 'See how well your website performs. Then, get tips to improve your user experience.',
        url: 'https://web.dev/measure',
        icon: 'https://web.dev/images/favicon-32x32.png',
    },
    {
        name: 'Webflow',
        categories: [toolsAndUtilities.websiteBuilders],
        description:
            'Build responsive websites in your browser, then launch with our world-class hosting or export your code. Discover the professional website platform built for your business.',
        url: 'https://webflow.com/',
        icon:
            'https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/5d5595354de4fbdd8c554dba_default_webclip.png',
    },
    {
        name: 'Webframe',
        categories: [uiDesign.inspiration],
        description:
            'A showcase of beautiful and well designed web app screens for design inspiration. Including screens from behind signup/paywalls! 😱.',
        url: 'https://webframe.xyz/',
        icon: 'https://webframe.xyz/favicon.ico',
    },
    {
        name: 'WebPagetest',
        categories: [toolsAndUtilities.performance],
        description:
            'Run a free website speed test from around the globe using real browsers at consumer connection speeds with detailed optimization recommendations.',
        keywords: ['WebPageTest', 'Website Speed Test', 'Page Speed'],
        url: 'https://www.webpagetest.org/',
        icon: 'https://www.webpagetest.org/images/favicon/favicon-32x32.png',
    },
    {
        name: 'Website Authority Checker',
        categories: [toolsAndUtilities.seo],
        description:
            'Free tool to check the "authority" of any website based on the quality and quantity of its external backlinks.',
        url: 'https://ahrefs.com/website-authority-checker',
        icon: 'https://cdn.ahrefs.com/favicon-32x32.png?v=2',
    },
    {
        name: 'WebStorm',
        categories: [toolsAndUtilities.editorsAndExtensions],
        description:
            'A powerful IDE for modern JavaScript development with code completion and refactoring for JavaScript, TypeScript, and the most popular web frameworks.',
        url: 'https://www.jetbrains.com/webstorm/',
        icon: 'https://www.jetbrains.com/favicon-32x32.png',
    },
    {
        name: 'Weebly',
        categories: [toolsAndUtilities.websiteBuilders],
        description:
            'Weebly’s free website builder makes it easy to build a website, blog, or online store. Find customizable designs, domains, and eCommerce tools for any type of business using our website builder.',
        url: 'https://www.weebly.com/',
        icon: 'https://www.weebly.com/favicon.ico',
    },
    {
        name: 'Wes Bos',
        categories: [programming.youtubeChannels],
        description: 'HTML, CSS, JavaScript and WordPress web development tutorials!',
        keywords: ['JavaScript jQuery HTML5 CSS3 development web design css php wordpress'],
        url: 'https://www.youtube.com/channel/UCoebwHSTvwalADTJhps0emA',
        icon: 'https://www.youtube.com/s/desktop/d743f786/img/favicon_96.png',
    },
    {
        name: 'WhatFont',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description: 'The easiest way to identify fonts on web pages.',
        url: 'https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm?hl=en',
        icon: 'https://ssl.gstatic.com/chrome/webstore/images/icon_96px.png',
    },
    {
        name: 'Windframe',
        categories: [toolsAndUtilities.websiteBuilders],
        description:
            'Rapidly Build and Prototype responsive websites using a drag and drop Tailwind CSS website builder',
        keywords: ['website builder', 'tailwind css builder', 'drag and drop builder'],
        url: 'https://www.devwares.com/windframe/',
        icon: 'https://windframe.devwares.com/devwaresIcon.png',
    },
    {
        name: 'Wix',
        categories: [toolsAndUtilities.websiteBuilders],
        description:
            'Create a free website with Wix.com. Choose a stunning template and customize anything with the Wix website builder—no coding skills needed. Create yours today!',
        url: 'https://www.wix.com/',
        icon: 'https://www.wix.com/favicon.ico',
    },
    {
        name: 'WordPress',
        categories: [toolsAndUtilities.websiteBuilders],
        description:
            'Create a free website or build a blog with ease on WordPress.com. Dozens of free, customizable, mobile-ready designs and themes. Free hosting and support.',
        url: 'https://wordpress.com/',
        icon: 'https://s1.wp.com/i/favicon.ico?v=1447321881',
    },
    {
        name: 'Working Nomads',
        categories: [jobs.remoteOnly],
        description:
            'Remote jobs for digital working nomads. Start your telecommuting career and work remotely from home or places around the world.',
        keywords: [
            'remote jobs',
            'telecommuting jobs',
            'work from home jobs',
            'remote',
            'telecommuting',
            'virtual',
            'working nomads',
        ],
        url: 'https://www.workingnomads.co/jobs',
        icon: 'https://www.workingnomads.co/static/jobs/assets/favicon.ico',
    },
    {
        name: 'WrapPixel - Admin Provider',
        categories: [programming.templates],
        description:
            'Download high quality, professional and easy-to-use Free Admin Dashboard Template which is built with Angular, React, VueJs, NextJs & NuxtJs to create your applications faster.',
        keywords: ['React', 'Angular', 'Admin template', 'bootstrap', 'Vuejs', 'NextJs', 'NuxtJs'],
        url: 'https://www.wrappixel.com/',
        icon: 'https://www.wrappixel.com/wp-content/uploads/2019/01/favicon.png',
    },
    {
        name: 'Writty',
        categories: [toolsAndUtilities.writing],
        description: 'A simple writing app and text editor to help you focus on what matters.',
        keywords: ['writing app', 'text editor', 'wysiwyg'],
        url: 'https://writtyapp.com/',
        icon: 'https://writtyapp.com/images/favicon.png',
    },
    {
        name: 'wweb.dev',
        categories: [community.blogsAndForums],
        description:
            'Stay up to date with weekly updates, get resources for your next projects abd read articles and tutorials about web development.',
        url: 'https://wweb.dev/',
        icon: 'https://wweb.dev/favicon.ico',
    },
]
