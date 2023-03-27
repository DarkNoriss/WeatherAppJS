(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const u=()=>{const t=document.querySelector(".header"),e=document.createElement("form");e.classList.add("form-location");const o=document.createElement("input");o.name="location",o.placeholder="Search City",o.required=!0,e.append(o);const c=document.createElement("button"),n=document.createElement("img");n.src="https://raw.githubusercontent.com/DarkNoriss/WeatherApp/fc6470583862003d99deee0d062eda33a958368d/src/icons/magnifying-glass.svg",c.append(n),e.append(c),t.append(e)},d=()=>{const t=document.querySelector(".footer"),e=document.createElement("a");e.href="https://github.com/DarkNoriss",e.target="__blank";const o=document.createElement("div");fetch("https://raw.githubusercontent.com/DarkNoriss/WeatherApp/master/src/icons/github.svg").then(n=>n.text()).then(n=>{o.innerHTML=n}),e.append(o);const c=document.createElement("p");c.innerText="DarkNoriss",e.append(c),t.append(e)},p="1986480656ec490d950204923202611";let a;const m=async t=>{const e=`https://api.weatherapi.com/v1/current.json?key=${p}&q=${t}&aqi=no`;return await l(e)},l=async t=>fetch(t).then(e=>e.json()).catch(e=>console.error(e)),h=async()=>{await fetch("https://raw.githubusercontent.com/DarkNoriss/WeatherApp/master/src/weather_conditions.json").then(t=>t.json()).then(t=>{a=Object.values(t)}).catch(t=>console.error(t))},f=()=>a,g=()=>{const t=document.querySelector(".main-container"),e=document.createElement("div");e.classList.add("app");const o=document.createElement("span");o.classList.add("location"),o.setAttribute("data-location",""),e.append(o);const c=document.createElement("img");c.classList.add("current-icon"),c.setAttribute("data-current-icon",""),e.append(c);const n=document.createElement("div");n.classList.add("current-temp");const r=document.createElement("span");r.setAttribute("data-current-temp",""),n.append(r);const s=document.createElement("span");s.setAttribute("data-temp-sign",""),n.append(s),e.append(n),t.append(e)},y=t=>{console.log(t),b(t),E(t)},b=t=>{const e=document.querySelector("[data-location]");e.innerText=`${t.location.name}`},E=t=>{v(t);const e=document.querySelector("[data-current-temp]");e.innerText=`${t.current.temp_c}°`},v=async t=>{const e=t.current.condition.icon,o=f(),c=t.current.condition.text,n=document.querySelector("[data-current-icon]");let r="";e.includes("day")?o.forEach(s=>{s.day==c&&(r=`https://raw.githubusercontent.com/DarkNoriss/WeatherApp/master/src/icons/day/${s.icon}.svg`)}):o.forEach(s=>{s.night==c&&(r=`https://raw.githubusercontent.com/DarkNoriss/WeatherApp/master/src/icons/night/${s.icon}.svg`)}),n.src=r},i=()=>document.querySelector(".form-location");window.onload=()=>{u(),g(),d(),i().addEventListener("submit",w),h()};const w=async t=>{t.preventDefault();const e=t.target[0].value,o=await m(`${e}`);o.error!=null?console.log("ERROR"):y(o),i().reset()};
