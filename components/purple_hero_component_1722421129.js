/* Summary: Contains a section with the following components:
1. Particles animation: A canvas element for displaying a particle animation in the background.
2. Illustration: An SVG illustration with a gradient background and various filters applied.
3. Hero content: The main content of the landing page, including an announcement text, a hero text, a sub-hero text, and two buttons. The hero content is centered.
*/

Vue.component("purple_hero_component_1722421129", {
    template: `
    <section id="hero-section-container" class="bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-500">
        <div id="section-container" class="relative max-w-6xl mx-auto px-4 sm:px-6 backdrop-blur-lg bg-white/10 rounded-xl shadow-lg">
            <div id="hero-content-container" class="pt-32 pb-16 md:pt-52 md:pb-32">
                <!-- Hero content -->
                <div id="hero-content" class="max-w-3xl mx-auto text-center" style="position: relative;z-index: 1">
                    <div id="announcement-text" class="mb-6" data-aos="fade-down"><div id="announcement-text-inner" class="flex relative before:absolute before:inset-0 before:blur-md"><a id="announcement-link" class="flex-1 btn-sm py-0.5 transition duration-150 ease-in-out group relative before:absolute before:inset-0 before:rounded-full before:pointer-events-none shadow-lg" href="#0" :class="[announcementLinkStyle, announcementLinkHoverStyle, announcementLinkGradientStyle, announcementLinkBeforeStyle]"><span id="announcement-link-text" class="relative inline-flex items-center text-white">Introducing our new blockchain analysis tool! <span id="announcement-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" :class="landingPageAnnouncementTextStyle">-&gt;</span></span></a></div></div>
                    <div class="flex" id="hero-text-container"><h1 id="hero-text" class="h1 text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-purple-300 to-indigo-200 pb-4" data-aos="fade-down">Gain Deep Insights into Blockchain Data</h1></div>
                    <div class="flex" id="sub-hero-text-container"><p id="sub-hero-text" class="flex-1 text-lg mb-8 text-white" data-aos="fade-down" data-aos-delay="200" :class="landingPageSubHeroTextStyle">Our powerful analysis engine helps you uncover valuable patterns and trends within the blockchain ecosystem.</p></div>
                    <div id="hero-buttons" class="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-aos="fade-down" data-aos-delay="400">
                        <div id="get-started-button-container" class="flex"><a id="get-started-button" class="flex-1 btn w-full transition duration-150 ease-in-out group backdrop-blur-md bg-white/30 text-white rounded-lg shadow-lg hover:bg-white/40" href="#0" :class="[getStartedButtonPrimaryStyle, getStartedButtonGradientStyle, getStartedButtonHoverStyle]">Get Started <span id="get-started-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" :class="getStartedArrowStyle">-&gt;</span></a></div>
                        <div id="docs-button-container" class="flex">
                            <a id="docs-button" class="flex-1 btn backdrop-blur-md bg-white/20 hover:bg-white/30 w-full transition duration-150 ease-in-out text-white rounded-lg shadow-lg" href="#0" :class="[docsButtonPrimaryStyle, docsButtonHoverStyle, docsButtonBackgroundStyle]">
                                <svg id="docs-icon" class="shrink-0 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" :class="docsIconStyle"><path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" /></svg>
                                <span id="docs-button-text">Read the docs</span>
                            </a>
                        </div>
                    </div>
                    <div id="hello-world-button-container" class="flex mt-4">
                        <button id="hello-world-button" class="flex-1 btn backdrop-blur-md bg-pink-400/50 hover:bg-pink-500/60 text-white w-full transition duration-150 ease-in-out rounded-lg shadow-lg px-4 py-2">
                            Hello World
                        </button>
                    </div>

                </div>

            </div>
        </div>
    </section>`
        data() {
            return {
                expanded: false, 
                tab: null,
                announcementTextStyle: "before:bg-purple-500",
                announcementLinkStyle: "text-slate-300",
                announcementLinkHoverStyle: "hover:text-white",
                announcementLinkGradientStyle: "[background:linear-gradient(theme(colors.purple.500),_theme(colors.purple.500))_padding-box,_linear-gradient(theme(colors.purple.500),_theme(colors.purple.200)_75%,_theme(colors.transparent)_100%)_border-box]",
                announcementLinkBeforeStyle:"before:bg-slate-800/50",
                landingPageAnnouncementTextStyle: "text-purple-500",
                landingPageSubHeroTextStyle: "text-slate-300",
                getStartedButtonPrimaryStyle: "text-slate-900",
                getStartedButtonGradientStyle: "bg-gradient-to-r from-white/80 via-white to-white/80",
                getStartedButtonHoverStyle: "hover:bg-white",
                getStartedArrowStyle: "text-purple-500",
                docsButtonPrimaryStyle: "text-slate-200",
                docsButtonHoverStyle: "hover:text-white",
                docsButtonBackgroundStyle: "bg-slate-900",
                docsIconStyle: "fill-slate-300"
            };
        },
    });
                    