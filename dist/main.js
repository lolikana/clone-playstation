(()=>{"use strict";var e={208:(e,t,s)=>{s.r(t)},813:function(e,t,s){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.navSecondData=void 0;const i=a(s(15)),r=a(s(578)),n=a(s(413)),c=a(s(432)),o=a(s(487)),l=a(s(791)),d=a(s(864)),u=a(s(190)),f=a(s(509)),p=a(s(265)),m=a(s(854)),h=a(s(4)),v=a(s(384));t.navSecondData=[{id:"Games",title:"Games",items:[{icon:i.default,title:"PS5"},{icon:r.default,title:"PS4"},{icon:c.default,title:"PS VR"},{icon:l.default,title:"PS Plus"},{icon:d.default,title:"Buy Games"}],links:[{text:"PlayStation Indies",href:"#"},{text:"PS4 games on PS5",href:"#"},{text:"Free to Play",href:"#"},{text:"Playstation games on PC",href:"#"},{text:"Deals & offers",href:"#"}]},{id:"Hardware",title:"Hardware",items:[{icon:i.default,title:"PS5"},{icon:r.default,title:"PS4"},{icon:n.default,title:"PS4 Pro"},{icon:o.default,title:"PS VR2"}],links:[{text:"DualSense wireless controller",href:"#"},{text:"PULSE 3D wireless headset",href:"#"},{text:"DUALSHOCK 4 wireless controller",href:"#"},{text:"PS5 & PS4 accessories",href:"#"},{text:"Playstation VR",href:"#"}]},{id:"Services",title:"Services",items:[{icon:l.default,title:"PS Plus"},{icon:u.default,title:"PS Stars"}],links:[{text:"PS5 entertainment",href:"#"},{text:"PS4 entertainment",href:"#"}]},{id:"News",title:"News",items:[{icon:f.default,title:"PS Blog"},{icon:p.default,title:"This Month on Playstation"}],links:[{text:"Competition Center",href:"#"},{text:"Accessibility",href:"#"},{text:"Privacy & Safety",href:"#"}]},{id:"Shop",title:"Shop",items:[{icon:n.default,title:"Hardware and Discs"},{icon:d.default,title:"Digital Games and Services"},{icon:m.default,title:"Official Merchandise"}],links:[{text:"Buy a PS5",href:"#"},{text:"New releases",href:"#"},{text:"Latest Discount",href:"#"},{text:"Buy gift card",href:"#"},{text:"Subscribe to PS Plus",href:"#"}]},{id:"Support",title:"Support",items:[{icon:h.default,title:"Support"},{icon:v.default,title:"PSN Status"}],links:[{text:"Account",href:"#"},{text:"Store",href:"#"},{text:"Subscriptions",href:"#"},{text:"Games",href:"#"},{text:"Hardware",href:"#"}]}]},265:(e,t,s)=>{e.exports=s.p+"assets/b3fc06457682b475b7dd.png"},509:(e,t,s)=>{e.exports=s.p+"assets/b7715399ba44e8de8cb3.png"},791:(e,t,s)=>{e.exports=s.p+"assets/efb3ffdbcca3a03eea76.png"},384:(e,t,s)=>{e.exports=s.p+"assets/38ca8ac306d93b86574c.png"},190:(e,t,s)=>{e.exports=s.p+"assets/e59d778aeccdd746853a.png"},4:(e,t,s)=>{e.exports=s.p+"assets/70ac2d56737eb464c36e.png"},432:(e,t,s)=>{e.exports=s.p+"assets/3e816a58be3e056936ad.png"},487:(e,t,s)=>{e.exports=s.p+"assets/f4b8dc00e98c08841f63.png"},413:(e,t,s)=>{e.exports=s.p+"assets/b11684b56dffba787346.png"},578:(e,t,s)=>{e.exports=s.p+"assets/ae3dba7e004bd32d74d3.png"},15:(e,t,s)=>{e.exports=s.p+"assets/8637f7366f19c8919ee1.png"},864:(e,t,s)=>{e.exports=s.p+"assets/80e0e26d7b94104be6b7.png"},854:(e,t,s)=>{e.exports=s.p+"assets/ae0d5e7d43ecf61e287b.png"}},t={};function s(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,s),r.exports}s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{s(208);const e=s(813),t=document.querySelector("html"),a=document.querySelector(".navbar"),i=document.querySelector(".menu--toggler"),r=document.querySelector(".navbar--primary"),n=document.querySelector(".navbar--secondary"),c=document.querySelector(".nav-links"),o=document.querySelectorAll(".nav-link-btn"),l=document.querySelector(".navbar--search-icon"),d=document.querySelector(".navbar--secondary-toggler"),u=document.querySelector(".secondary--list-items"),f=document.querySelector(".secondary--list-links"),p=document.querySelector(".primary--search-toggler"),m=document.querySelector(".search--modal"),h=document.querySelector(".search--modal-toggler"),v=document.querySelector(".search--select-placeholder"),S=document.querySelector(".search--dropdown"),b=document.querySelectorAll('input[name="search--select-option"]'),g=document.querySelector('input[name="search-input"]');window.onscroll=function(){window.pageYOffset>=L?y.classList.add("sticky"):y.classList.remove("sticky")};const y=document.getElementsByTagName("nav")[0],L=y.offsetTop;let x=!1;function P(e){r.setAttribute("data-visible",`${e}`),i.setAttribute("aria-expanded",`${e}`),x=e,e?i.classList.add("open","burger--shadow-active"):i.classList.remove("open","burger--shadow-active")}t.addEventListener("click",(e=>{const t=r.getAttribute("data-visible"),s=e.target;console.log(s),s!==r&&s!==n&&s!==u&&s!==f&&s!==d&&s!==l&&s!==m&&(i.contains(s)&&"false"===t&&!x?P(!0):(!r.contains(s)&&"true"===t||s===a)&&(P(!1),n.setAttribute("data-visible","false"),o.forEach((e=>{e.classList.remove("active")}))),s!==v&&(v.classList.remove("active"),S.classList.remove("show"),v.innerHTML=w[0]))})),c.addEventListener("click",(t=>{const s=t.target.closest(".nav-link-btn");if(null!==s){if(s.classList.contains("active"))return s.classList.remove("active"),n.setAttribute("data-visible","false"),void(window.innerWidth>=700&&P(!1));var a;o.forEach((e=>{e.classList.remove("active"),s.classList.add("active"),n.setAttribute("data-visible","true"),P(!0)})),a=e.navSecondData.filter((e=>e.id===s.innerHTML))[0],d.innerHTML=a.title,u.innerHTML="",a.items.map((e=>{u.appendChild(((e,t)=>{const s=document.createElement("li"),a=document.createElement("a"),i=document.createElement("img"),r=document.createElement("span");return s.classList.add("secondary--list-item"),a.href="#",a.classList.add("secondary--item-link"),i.classList.add("secondary--item-img"),i.src=e,r.classList.add("secondary--item-text"),r.innerHTML=t,a.appendChild(i),a.appendChild(r),s.appendChild(a),s.classList.add("fade-out"),requestAnimationFrame((()=>{s.classList.remove("fade-out")})),s})(e.icon,e.title))})),f.innerHTML="",a.links.map((e=>{f.appendChild(((e,t)=>{const s=document.createElement("li"),a=document.createElement("a");return s.classList.add("secondary--list-link"),a.href=e,a.innerHTML=t,s.appendChild(a),s.classList.add("fade-out"),requestAnimationFrame((()=>{s.classList.remove("fade-out")})),s})(e.href,e.text))}))}})),d.addEventListener("click",(()=>{n.setAttribute("data-visible","false"),o.forEach((e=>{e.classList.remove("active")}))})),p.addEventListener("click",(()=>{m.setAttribute("data-visible","true")}));const w=["PlayStation.com","Sites"],k=()=>{const e=document.querySelector('input[name="search--select-option"]:checked').value;w.shift(),w.unshift(e)};v.addEventListener("click",(()=>{v.classList.toggle("active"),S.classList.toggle("show"),k(),v.classList.contains("active")?v.innerHTML=w[1]:v.innerHTML=w[0]})),b.forEach((e=>e.addEventListener("change",(()=>{k(),v.innerHTML=w[0],g.placeholder=`Search ${w[0]}`})))),h.addEventListener("click",(()=>{m.setAttribute("data-visible","false")})),m.addEventListener("click",(e=>{const t=e.target;m===t&&(v.classList.remove("active"),S.classList.remove("show"),m.setAttribute("data-visible","false"),v.innerHTML=w[0])}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDeEJwQixFQUF3QnFCLFFBQVFGLEVBQWtCLEVBR3BEN0MsRUFBMkJnQixpQkFBaUIsU0FBUyxLQUNuRGhCLEVBQTJCUSxVQUFVd0MsT0FBTyxVQUM1Qy9DLEVBQWVPLFVBQVV3QyxPQUFPLFFBRWhDSixJQUVJNUMsRUFBMkJRLFVBQVVjLFNBQVMsVUFDaER0QixFQUEyQnlCLFVBQVlDLEVBQXdCLEdBRS9EMUIsRUFBMkJ5QixVQUFZQyxFQUF3QixFLElBSW5FeEIsRUFBbUJxQixTQUFRMEIsR0FDekJBLEVBQU1qQyxpQkFBaUIsVUFBVSxLQUMvQjRCLElBQ0E1QyxFQUEyQnlCLFVBQVlDLEVBQXdCLEdBQy9EdkIsRUFBZ0IrQyxZQUFjLFVBQVV4QixFQUF3QixJQUFJLE1BSXhFM0IsRUFBbUJpQixpQkFBaUIsU0FBUyxLQUMzQ2xCLEVBQVlpQixhQUFhLGVBQWdCLFFBQVEsSUFVbkRqQixFQUFZa0IsaUJBQWlCLFNBQVNwRCxJQUNwQyxNQUFNdUQsRUFBU3ZELEVBQUV1RCxPQUNickIsSUFBZ0JxQixJQVJwQm5CLEVBQTJCUSxVQUFVRSxPQUFPLFVBQzVDVCxFQUFlTyxVQUFVRSxPQUFPLFFBQ2hDWixFQUFZaUIsYUFBYSxlQUFnQixTQUN6Q2YsRUFBMkJ5QixVQUFZQyxFQUF3QixHQU03QyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xvbmUtcGxheXN0YXRpb24vLi9zcmMvdHMvc2VlZHMvZGF0YS50cyIsIndlYnBhY2s6Ly9jbG9uZS1wbGF5c3RhdGlvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jbG9uZS1wbGF5c3RhdGlvbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Nsb25lLXBsYXlzdGF0aW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2xvbmUtcGxheXN0YXRpb24vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2xvbmUtcGxheXN0YXRpb24vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU5hdlNlY29uZERhdGEgfSBmcm9tICcuLi9saWJzL3R5cGVzJztcbmltcG9ydCBQUzVJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi9uYXZiYXItc2Vjb25kYXJ5L3BzNS5wbmcnO1xuaW1wb3J0IFBTNEljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uL25hdmJhci1zZWNvbmRhcnkvcHM0LnBuZyc7XG5pbXBvcnQgUFM0UHJvcEljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uL25hdmJhci1zZWNvbmRhcnkvcHM0LXByby5wbmcnO1xuaW1wb3J0IFBTVlJJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi9uYXZiYXItc2Vjb25kYXJ5L3BzLXZyLnBuZyc7XG5pbXBvcnQgUFNWUjJJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi9uYXZiYXItc2Vjb25kYXJ5L3BzLXZyMi5wbmcnO1xuaW1wb3J0IFBTUGx1c0ljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uL25hdmJhci1zZWNvbmRhcnkvcHMtcGx1cy5wbmcnO1xuaW1wb3J0IFNob3BHYW1lSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24vbmF2YmFyLXNlY29uZGFyeS9zaG9wLWdhbWVzLnBuZyc7XG5pbXBvcnQgUFNTdGFyc0ljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uL25hdmJhci1zZWNvbmRhcnkvcHMtc3RhcnMucG5nJztcbmltcG9ydCBQU0Jsb2dJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi9uYXZiYXItc2Vjb25kYXJ5L3BzLWJsb2cucG5nJztcbmltcG9ydCBQU0Jsb2dNb250aEljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uL25hdmJhci1zZWNvbmRhcnkvcHMtYmxvZy1tb250aC5wbmcnO1xuaW1wb3J0IFNob3BPZmZJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi9uYXZiYXItc2Vjb25kYXJ5L3Nob3Atb2ZmaWNpYWwucG5nJztcbmltcG9ydCBTdXBwb3J0SWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24vbmF2YmFyLXNlY29uZGFyeS9wcy1zdXBwb3J0LnBuZyc7XG5pbXBvcnQgUFNOSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24vbmF2YmFyLXNlY29uZGFyeS9wcy1wc24ucG5nJztcblxuZXhwb3J0IGNvbnN0IG5hdlNlY29uZERhdGE6IElOYXZTZWNvbmREYXRhW10gPSBbXG4gIHtcbiAgICBpZDogJ0dhbWVzJyxcbiAgICB0aXRsZTogJ0dhbWVzJyxcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBpY29uOiBQUzVJY29uLFxuICAgICAgICB0aXRsZTogJ1BTNSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFBTNEljb24sXG4gICAgICAgIHRpdGxlOiAnUFM0J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogUFNWUkljb24sXG4gICAgICAgIHRpdGxlOiAnUFMgVlInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiBQU1BsdXNJY29uLFxuICAgICAgICB0aXRsZTogJ1BTIFBsdXMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiBTaG9wR2FtZUljb24sXG4gICAgICAgIHRpdGxlOiAnQnV5IEdhbWVzJ1xuICAgICAgfVxuICAgIF0sXG4gICAgbGlua3M6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1BsYXlTdGF0aW9uIEluZGllcycsXG4gICAgICAgIGhyZWY6ICcjJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1BTNCBnYW1lcyBvbiBQUzUnLFxuICAgICAgICBocmVmOiAnIydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdGcmVlIHRvIFBsYXknLFxuICAgICAgICBocmVmOiAnIydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdQbGF5c3RhdGlvbiBnYW1lcyBvbiBQQycsXG4gICAgICAgIGhyZWY6ICcjJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0RlYWxzICYgb2ZmZXJzJyxcbiAgICAgICAgaHJlZjogJyMnXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgaWQ6ICdIYXJkd2FyZScsXG4gICAgdGl0bGU6ICdIYXJkd2FyZScsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWNvbjogUFM1SWNvbixcbiAgICAgICAgdGl0bGU6ICdQUzUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiBQUzRJY29uLFxuICAgICAgICB0aXRsZTogJ1BTNCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFBTNFByb3BJY29uLFxuICAgICAgICB0aXRsZTogJ1BTNCBQcm8nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiBQU1ZSMkljb24sXG4gICAgICAgIHRpdGxlOiAnUFMgVlIyJ1xuICAgICAgfVxuICAgIF0sXG4gICAgbGlua3M6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0R1YWxTZW5zZSB3aXJlbGVzcyBjb250cm9sbGVyJyxcbiAgICAgICAgaHJlZjogJyMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnUFVMU0UgM0Qgd2lyZWxlc3MgaGVhZHNldCcsXG4gICAgICAgIGhyZWY6ICcjJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0RVQUxTSE9DSyA0IHdpcmVsZXNzIGNvbnRyb2xsZXInLFxuICAgICAgICBocmVmOiAnIydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdQUzUgJiBQUzQgYWNjZXNzb3JpZXMnLFxuICAgICAgICBocmVmOiAnIydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdQbGF5c3RhdGlvbiBWUicsXG4gICAgICAgIGhyZWY6ICcjJ1xuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGlkOiAnU2VydmljZXMnLFxuICAgIHRpdGxlOiAnU2VydmljZXMnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIGljb246IFBTUGx1c0ljb24sXG4gICAgICAgIHRpdGxlOiAnUFMgUGx1cydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFBTU3RhcnNJY29uLFxuICAgICAgICB0aXRsZTogJ1BTIFN0YXJzJ1xuICAgICAgfVxuICAgIF0sXG4gICAgbGlua3M6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1BTNSBlbnRlcnRhaW5tZW50JyxcbiAgICAgICAgaHJlZjogJyMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnUFM0IGVudGVydGFpbm1lbnQnLFxuICAgICAgICBocmVmOiAnIydcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBpZDogJ05ld3MnLFxuICAgIHRpdGxlOiAnTmV3cycsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWNvbjogUFNCbG9nSWNvbixcbiAgICAgICAgdGl0bGU6ICdQUyBCbG9nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogUFNCbG9nTW9udGhJY29uLFxuICAgICAgICB0aXRsZTogJ1RoaXMgTW9udGggb24gUGxheXN0YXRpb24nXG4gICAgICB9XG4gICAgXSxcbiAgICBsaW5rczogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnQ29tcGV0aXRpb24gQ2VudGVyJyxcbiAgICAgICAgaHJlZjogJyMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnQWNjZXNzaWJpbGl0eScsXG4gICAgICAgIGhyZWY6ICcjJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1ByaXZhY3kgJiBTYWZldHknLFxuICAgICAgICBocmVmOiAnIydcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBpZDogJ1Nob3AnLFxuICAgIHRpdGxlOiAnU2hvcCcsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWNvbjogUFM0UHJvcEljb24sXG4gICAgICAgIHRpdGxlOiAnSGFyZHdhcmUgYW5kIERpc2NzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogU2hvcEdhbWVJY29uLFxuICAgICAgICB0aXRsZTogJ0RpZ2l0YWwgR2FtZXMgYW5kIFNlcnZpY2VzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogU2hvcE9mZkljb24sXG4gICAgICAgIHRpdGxlOiAnT2ZmaWNpYWwgTWVyY2hhbmRpc2UnXG4gICAgICB9XG4gICAgXSxcbiAgICBsaW5rczogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnQnV5IGEgUFM1JyxcbiAgICAgICAgaHJlZjogJyMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnTmV3IHJlbGVhc2VzJyxcbiAgICAgICAgaHJlZjogJyMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnTGF0ZXN0IERpc2NvdW50JyxcbiAgICAgICAgaHJlZjogJyMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnQnV5IGdpZnQgY2FyZCcsXG4gICAgICAgIGhyZWY6ICcjJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1N1YnNjcmliZSB0byBQUyBQbHVzJyxcbiAgICAgICAgaHJlZjogJyMnXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgaWQ6ICdTdXBwb3J0JyxcbiAgICB0aXRsZTogJ1N1cHBvcnQnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIGljb246IFN1cHBvcnRJY29uLFxuICAgICAgICB0aXRsZTogJ1N1cHBvcnQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiBQU05JY29uLFxuICAgICAgICB0aXRsZTogJ1BTTiBTdGF0dXMnXG4gICAgICB9XG4gICAgXSxcbiAgICBsaW5rczogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnQWNjb3VudCcsXG4gICAgICAgIGhyZWY6ICcjJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1N0b3JlJyxcbiAgICAgICAgaHJlZjogJyMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnU3Vic2NyaXB0aW9ucycsXG4gICAgICAgIGhyZWY6ICcjJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0dhbWVzJyxcbiAgICAgICAgaHJlZjogJyMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnSGFyZHdhcmUnLFxuICAgICAgICBocmVmOiAnIydcbiAgICAgIH1cbiAgICBdXG4gIH1cbl07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zYXNzL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBJTmF2U2Vjb25kRGF0YSB9IGZyb20gJy4vdHMvbGlicy90eXBlcyc7XG5pbXBvcnQgeyBuYXZTZWNvbmREYXRhIH0gZnJvbSAnLi90cy9zZWVkcy9kYXRhJztcblxuY29uc3QgaHRtbFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKSBhcyBIVE1MRWxlbWVudDtcbi8qIE5hdiBtZW51IFNUQVJUICovXG5jb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJykgYXMgSFRNTERpdkVsZW1lbnQ7XG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtLXRvZ2dsZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcbi8qKiBQcmltYXJ5IG5hdiAqL1xuY29uc3QgcHJpbWFyeU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItLXByaW1hcnknKSBhcyBIVE1MRGl2RWxlbWVudDtcbmNvbnN0IHNlY29uZGFyeU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItLXNlY29uZGFyeScpIGFzIEhUTUxEaXZFbGVtZW50O1xuY29uc3QgbGlua3NOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWxpbmtzJykgYXMgSFRNTFVMaXN0RWxlbWVudDtcbmNvbnN0IGJ0bnNMaW5rTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgJy5uYXYtbGluay1idG4nXG4pIGFzIE5vZGVMaXN0T2Y8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci0tc2VhcmNoLWljb24nKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuLyoqIFNlY29uZCBuYXYgKi9cbmNvbnN0IHRvZ2dsZXJCdG5TZWNvbmRhcnlOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnLm5hdmJhci0tc2Vjb25kYXJ5LXRvZ2dsZXInXG4pIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuY29uc3QgdWxMaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kYXJ5LS1saXN0LWl0ZW1zJykgYXMgSFRNTFVMaXN0RWxlbWVudDtcbmNvbnN0IHVsTGlzdExpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZGFyeS0tbGlzdC1saW5rcycpIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XG4vKiogU2VhcmNoIGJhciAqL1xuY29uc3Qgc2VhcmNoQmFyVG9nZ2xlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICcucHJpbWFyeS0tc2VhcmNoLXRvZ2dsZXInXG4pIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuY29uc3Qgc2VhcmNoTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLS1tb2RhbCcpIGFzIEhUTUxEaXZFbGVtZW50O1xuY29uc3Qgc2VhcmNoTW9kYWxUb2dnbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJy5zZWFyY2gtLW1vZGFsLXRvZ2dsZXInXG4pIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuY29uc3Qgc2VhcmNoU2VsZWN0UGxhY2Vob2xkZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnLnNlYXJjaC0tc2VsZWN0LXBsYWNlaG9sZGVyJ1xuKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmNvbnN0IHNlYXJjaERyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC0tZHJvcGRvd24nKSBhcyBIVE1MRGl2RWxlbWVudDtcbmNvbnN0IHNlYXJjaFNlbGVjdElucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICdpbnB1dFtuYW1lPVwic2VhcmNoLS1zZWxlY3Qtb3B0aW9uXCJdJ1xuKSBhcyBOb2RlTGlzdE9mPEhUTUxJbnB1dEVsZW1lbnQ+O1xuY29uc3Qgc2VhcmNoVGV4dElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJ2lucHV0W25hbWU9XCJzZWFyY2gtaW5wdXRcIl0nXG4pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgbXlGdW5jdGlvbigpO1xufTtcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ25hdicpWzBdIGFzIEhUTUxFbGVtZW50O1xuY29uc3Qgc3RpY2t5ID0gbmF2Lm9mZnNldFRvcDtcblxuZnVuY3Rpb24gbXlGdW5jdGlvbigpIHtcbiAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSBzdGlja3kpIHtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnc3RpY2t5Jyk7XG4gIH0gZWxzZSB7XG4gICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3N0aWNreScpO1xuICB9XG59XG5cbi8qKiBCdXJnZXIgTWVudSAqKi9cbmxldCBtZW51T3BlbiA9IGZhbHNlO1xuXG5mdW5jdGlvbiBzZXRQcmltYXJ5TmF2KHNldDogYm9vbGVhbikge1xuICBwcmltYXJ5TmF2LnNldEF0dHJpYnV0ZSgnZGF0YS12aXNpYmxlJywgYCR7c2V0fWApO1xuICBtZW51QnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGAke3NldH1gKTtcblxuICBtZW51T3BlbiA9IHNldDtcbiAgaWYgKHNldCkge1xuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnb3BlbicsICdidXJnZXItLXNoYWRvdy1hY3RpdmUnKTtcbiAgfSBlbHNlIHtcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nLCAnYnVyZ2VyLS1zaGFkb3ctYWN0aXZlJyk7XG4gIH1cbn1cblxuaHRtbFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICBjb25zdCB2aXNpYmlsaXR5TmF2UHJpbWFyeSA9IHByaW1hcnlOYXYuZ2V0QXR0cmlidXRlKCdkYXRhLXZpc2libGUnKTtcbiAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgYW55O1xuICAvLyBjb25zdCBjdXJyZW50VGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0IGFzIGFueTtcbiAgY29uc29sZS5sb2codGFyZ2V0KTtcbiAgaWYgKFxuICAgIHRhcmdldCA9PT0gcHJpbWFyeU5hdiB8fFxuICAgIHRhcmdldCA9PT0gc2Vjb25kYXJ5TmF2IHx8XG4gICAgdGFyZ2V0ID09PSB1bExpc3RJdGVtcyB8fFxuICAgIHRhcmdldCA9PT0gdWxMaXN0TGlua3MgfHxcbiAgICB0YXJnZXQgPT09IHRvZ2dsZXJCdG5TZWNvbmRhcnlOYXYgfHxcbiAgICB0YXJnZXQgPT09IHNlYXJjaEJhciB8fFxuICAgIHRhcmdldCA9PT0gc2VhcmNoTW9kYWxcbiAgKVxuICAgIHJldHVybjtcblxuICBpZiAobWVudUJ0bi5jb250YWlucyh0YXJnZXQpICYmIHZpc2liaWxpdHlOYXZQcmltYXJ5ID09PSAnZmFsc2UnICYmICFtZW51T3Blbikge1xuICAgIHNldFByaW1hcnlOYXYodHJ1ZSk7XG4gIH0gZWxzZSBpZiAoXG4gICAgKCFwcmltYXJ5TmF2LmNvbnRhaW5zKHRhcmdldCkgJiYgdmlzaWJpbGl0eU5hdlByaW1hcnkgPT09ICd0cnVlJykgfHxcbiAgICB0YXJnZXQgPT09IG5hdmJhclxuICApIHtcbiAgICBzZXRQcmltYXJ5TmF2KGZhbHNlKTtcbiAgICBzZWNvbmRhcnlOYXYuc2V0QXR0cmlidXRlKCdkYXRhLXZpc2libGUnLCAnZmFsc2UnKTtcbiAgICBidG5zTGlua05hdi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAodGFyZ2V0ICE9PSBzZWFyY2hTZWxlY3RQbGFjZWhvbGRlckJ0bikge1xuICAgIHNlYXJjaFNlbGVjdFBsYWNlaG9sZGVyQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHNlYXJjaERyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICBzZWFyY2hTZWxlY3RQbGFjZWhvbGRlckJ0bi5pbm5lckhUTUwgPSBzZWFyY2hTZWxlY3RQbGFjZWhvbGRlclswXTtcbiAgfVxufSk7XG5cbi8qKiBkaXNwbGF5IGFjdGl2ZSBhcnJvdyBwcmltYXJ5IG5hdiAqL1xubGlua3NOYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogYW55KSA9PiB7XG4gIGNvbnN0IGNsaWNrZWQgPSBlLnRhcmdldC5jbG9zZXN0KCcubmF2LWxpbmstYnRuJyk7XG4gIGlmIChjbGlja2VkID09PSBudWxsKSByZXR1cm47XG5cbiAgaWYgKGNsaWNrZWQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgIGNsaWNrZWQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgc2Vjb25kYXJ5TmF2LnNldEF0dHJpYnV0ZSgnZGF0YS12aXNpYmxlJywgJ2ZhbHNlJyk7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDcwMCkge1xuICAgICAgc2V0UHJpbWFyeU5hdihmYWxzZSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIGJ0bnNMaW5rTmF2LmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgY2xpY2tlZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgIHNlY29uZGFyeU5hdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmlzaWJsZScsICd0cnVlJyk7XG4gICAgc2V0UHJpbWFyeU5hdih0cnVlKTtcbiAgfSk7XG5cbiAgY29uc3QgZGF0YSA9IG5hdlNlY29uZERhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gY2xpY2tlZC5pbm5lckhUTUwpO1xuICBjcmVhdGVTZWNvbmRhcnlFbGVtZW50cyhkYXRhWzBdKTtcbn0pO1xuXG4vKiogQ2xvc2Ugc2Vjb25kIG5hdiB0b2dnbGVyICovXG50b2dnbGVyQnRuU2Vjb25kYXJ5TmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBzZWNvbmRhcnlOYXYuc2V0QXR0cmlidXRlKCdkYXRhLXZpc2libGUnLCAnZmFsc2UnKTtcbiAgYnRuc0xpbmtOYXYuZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSk7XG59KTtcblxuLyoqIENyZWF0ZSBzZWNvbmQgbmF2IGVsZW1lbnQgKi9cbmNvbnN0IGNyZWF0ZVNlY29uZE5hdkl0ZW0gPSAoaWNvbjogc3RyaW5nLCB0aXRsZTogc3RyaW5nKTogSFRNTExJRWxlbWVudCA9PiB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgbGkuY2xhc3NMaXN0LmFkZCgnc2Vjb25kYXJ5LS1saXN0LWl0ZW0nKTtcbiAgYW5jaG9yLmhyZWYgPSAnIyc7XG4gIGFuY2hvci5jbGFzc0xpc3QuYWRkKCdzZWNvbmRhcnktLWl0ZW0tbGluaycpO1xuXG4gIGltZy5jbGFzc0xpc3QuYWRkKCdzZWNvbmRhcnktLWl0ZW0taW1nJyk7XG4gIGltZy5zcmMgPSBpY29uO1xuXG4gIHNwYW4uY2xhc3NMaXN0LmFkZCgnc2Vjb25kYXJ5LS1pdGVtLXRleHQnKTtcbiAgc3Bhbi5pbm5lckhUTUwgPSB0aXRsZTtcblxuICBhbmNob3IuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgYW5jaG9yLmFwcGVuZENoaWxkKHNwYW4pO1xuICBsaS5hcHBlbmRDaGlsZChhbmNob3IpO1xuICBsaS5jbGFzc0xpc3QuYWRkKCdmYWRlLW91dCcpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtb3V0Jyk7XG4gIH0pO1xuICByZXR1cm4gbGk7XG59O1xuXG5jb25zdCBjcmVhdGVzZWNvbmROYXZMaW5rID0gKGhyZWY6IHN0cmluZywgdGV4dDogc3RyaW5nKTogSFRNTExJRWxlbWVudCA9PiB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gIGxpLmNsYXNzTGlzdC5hZGQoJ3NlY29uZGFyeS0tbGlzdC1saW5rJyk7XG4gIGFuY2hvci5ocmVmID0gaHJlZjtcbiAgYW5jaG9yLmlubmVySFRNTCA9IHRleHQ7XG5cbiAgbGkuYXBwZW5kQ2hpbGQoYW5jaG9yKTtcbiAgbGkuY2xhc3NMaXN0LmFkZCgnZmFkZS1vdXQnKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLW91dCcpO1xuICB9KTtcbiAgcmV0dXJuIGxpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlU2Vjb25kYXJ5RWxlbWVudHMoZGF0YTogSU5hdlNlY29uZERhdGEpIHtcbiAgdG9nZ2xlckJ0blNlY29uZGFyeU5hdi5pbm5lckhUTUwgPSBkYXRhLnRpdGxlO1xuXG4gIHVsTGlzdEl0ZW1zLmlubmVySFRNTCA9ICcnO1xuICBkYXRhLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICB1bExpc3RJdGVtcy5hcHBlbmRDaGlsZChjcmVhdGVTZWNvbmROYXZJdGVtKGl0ZW0uaWNvbiwgaXRlbS50aXRsZSkpO1xuICB9KTtcblxuICB1bExpc3RMaW5rcy5pbm5lckhUTUwgPSAnJztcbiAgZGF0YS5saW5rcy5tYXAobGluayA9PiB7XG4gICAgdWxMaXN0TGlua3MuYXBwZW5kQ2hpbGQoY3JlYXRlc2Vjb25kTmF2TGluayhsaW5rLmhyZWYsIGxpbmsudGV4dCkpO1xuICB9KTtcbn1cblxuLyogLS0tLS0tLS0tLS0gTmF2IG1lbnUgRU5EIC0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tIFNlYXJjaCBiYXIgU1RBUlQgLS0tLS0tLS0tLS0gKi9cbnNlYXJjaEJhclRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHNlYXJjaE1vZGFsLnNldEF0dHJpYnV0ZSgnZGF0YS12aXNpYmxlJywgJ3RydWUnKTtcbn0pO1xuXG5jb25zdCBzZWFyY2hTZWxlY3RQbGFjZWhvbGRlciA9IFsnUGxheVN0YXRpb24uY29tJywgJ1NpdGVzJ107XG5cbmNvbnN0IHNlbGVjdFNlYXJjaFZhbHVlID0gKCkgPT4ge1xuICBjb25zdCBzZWFyY2hTZWxlY3RJbnB1dENoZWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICdpbnB1dFtuYW1lPVwic2VhcmNoLS1zZWxlY3Qtb3B0aW9uXCJdOmNoZWNrZWQnXG4gICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3Qgc2VhcmNoU2VsZWN0VmFsdWUgPSBzZWFyY2hTZWxlY3RJbnB1dENoZWNrZWQudmFsdWU7XG5cbiAgc2VhcmNoU2VsZWN0UGxhY2Vob2xkZXIuc2hpZnQoKTtcbiAgc2VhcmNoU2VsZWN0UGxhY2Vob2xkZXIudW5zaGlmdChzZWFyY2hTZWxlY3RWYWx1ZSk7XG59O1xuXG5zZWFyY2hTZWxlY3RQbGFjZWhvbGRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc2VhcmNoU2VsZWN0UGxhY2Vob2xkZXJCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIHNlYXJjaERyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcblxuICBzZWxlY3RTZWFyY2hWYWx1ZSgpO1xuXG4gIGlmIChzZWFyY2hTZWxlY3RQbGFjZWhvbGRlckJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgc2VhcmNoU2VsZWN0UGxhY2Vob2xkZXJCdG4uaW5uZXJIVE1MID0gc2VhcmNoU2VsZWN0UGxhY2Vob2xkZXJbMV07XG4gIH0gZWxzZSB7XG4gICAgc2VhcmNoU2VsZWN0UGxhY2Vob2xkZXJCdG4uaW5uZXJIVE1MID0gc2VhcmNoU2VsZWN0UGxhY2Vob2xkZXJbMF07XG4gIH1cbn0pO1xuXG5zZWFyY2hTZWxlY3RJbnB1dHMuZm9yRWFjaChpbnB1dCA9PlxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgc2VsZWN0U2VhcmNoVmFsdWUoKTtcbiAgICBzZWFyY2hTZWxlY3RQbGFjZWhvbGRlckJ0bi5pbm5lckhUTUwgPSBzZWFyY2hTZWxlY3RQbGFjZWhvbGRlclswXTtcbiAgICBzZWFyY2hUZXh0SW5wdXQucGxhY2Vob2xkZXIgPSBgU2VhcmNoICR7c2VhcmNoU2VsZWN0UGxhY2Vob2xkZXJbMF19YDtcbiAgfSlcbik7XG5cbnNlYXJjaE1vZGFsVG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc2VhcmNoTW9kYWwuc2V0QXR0cmlidXRlKCdkYXRhLXZpc2libGUnLCAnZmFsc2UnKTtcbn0pO1xuXG5mdW5jdGlvbiBjbG9zZVNlYXJjaE1vZGFsKCkge1xuICBzZWFyY2hTZWxlY3RQbGFjZWhvbGRlckJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgc2VhcmNoRHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICBzZWFyY2hNb2RhbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmlzaWJsZScsICdmYWxzZScpO1xuICBzZWFyY2hTZWxlY3RQbGFjZWhvbGRlckJ0bi5pbm5lckhUTUwgPSBzZWFyY2hTZWxlY3RQbGFjZWhvbGRlclswXTtcbn1cblxuc2VhcmNoTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gIGlmIChzZWFyY2hNb2RhbCAhPT0gdGFyZ2V0KSByZXR1cm47XG4gIGNsb3NlU2VhcmNoTW9kYWwoKTtcbn0pO1xuLyogLS0tLS0tLS0tLS0gU2VhcmNoIGJhciBFTkQgLS0tLS0tLS0tLS0gKi9cbiJdLCJuYW1lcyI6WyJuYXZTZWNvbmREYXRhIiwiaWQiLCJ0aXRsZSIsIml0ZW1zIiwiaWNvbiIsImxpbmtzIiwidGV4dCIsImhyZWYiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImNhbGwiLCJnIiwiZ2xvYmFsVGhpcyIsInRoaXMiLCJGdW5jdGlvbiIsImUiLCJ3aW5kb3ciLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGVuZ3RoIiwiRXJyb3IiLCJyZXBsYWNlIiwicCIsImh0bWxTZWxlY3QiLCJxdWVyeVNlbGVjdG9yIiwibmF2YmFyIiwibWVudUJ0biIsInByaW1hcnlOYXYiLCJzZWNvbmRhcnlOYXYiLCJsaW5rc05hdiIsImJ0bnNMaW5rTmF2IiwicXVlcnlTZWxlY3RvckFsbCIsInNlYXJjaEJhciIsInRvZ2dsZXJCdG5TZWNvbmRhcnlOYXYiLCJ1bExpc3RJdGVtcyIsInVsTGlzdExpbmtzIiwic2VhcmNoQmFyVG9nZ2xlciIsInNlYXJjaE1vZGFsIiwic2VhcmNoTW9kYWxUb2dnbGVyIiwic2VhcmNoU2VsZWN0UGxhY2Vob2xkZXJCdG4iLCJzZWFyY2hEcm9wZG93biIsInNlYXJjaFNlbGVjdElucHV0cyIsInNlYXJjaFRleHRJbnB1dCIsIm9uc2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJzdGlja3kiLCJuYXYiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJvZmZzZXRUb3AiLCJtZW51T3BlbiIsInNldFByaW1hcnlOYXYiLCJzZXQiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwidmlzaWJpbGl0eU5hdlByaW1hcnkiLCJnZXRBdHRyaWJ1dGUiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwiY29udGFpbnMiLCJmb3JFYWNoIiwiYnRuIiwiaW5uZXJIVE1MIiwic2VhcmNoU2VsZWN0UGxhY2Vob2xkZXIiLCJjbGlja2VkIiwiY2xvc2VzdCIsImlubmVyV2lkdGgiLCJkYXRhIiwiZmlsdGVyIiwiaXRlbSIsIm1hcCIsImFwcGVuZENoaWxkIiwibGkiLCJjcmVhdGVFbGVtZW50IiwiYW5jaG9yIiwiaW1nIiwic3BhbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNyZWF0ZVNlY29uZE5hdkl0ZW0iLCJsaW5rIiwiY3JlYXRlc2Vjb25kTmF2TGluayIsInNlbGVjdFNlYXJjaFZhbHVlIiwic2VhcmNoU2VsZWN0VmFsdWUiLCJzaGlmdCIsInVuc2hpZnQiLCJ0b2dnbGUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==