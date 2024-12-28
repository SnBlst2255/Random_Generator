const switches = document.getElementsByClassName("switch-item");

for(let i = 0; i < switches.length; i++){
    switches[i].addEventListener("click", function(e){
        const switchPanel = document.getElementById("switch-panel");
        const switchPanelItems = switchPanel.children;
        
        for(let i = 0; i < switchPanelItems.length; i++){
            switchPanelItems[i].classList.remove("selected")
        }
        
        e.target.classList.add("selected");

        const panels = document.getElementsByClassName("generator-panel");
        Object.keys(panels).forEach(key => {
            panels[key].classList.add("hidden");
        });

        const switchPanelId = e.target.id.replace("switch", "panel");
        document.getElementById(switchPanelId).classList.remove("hidden");
    });
}
