function drawScene() {
    const scene = document.getElementById("scene");
    scene.innerHTML = "";

    const hour = new Date().getHours();
    let isNight = (hour >= 18 || hour < 6);

    document.body.style.backgroundColor = isNight ? "black" : "lightblue";
    document.body.style.color = isNight ? "white" : "black";
    scene.style.backgroundColor = isNight ? "black" : "lightblue";

    const celestial = document.createElement("div");
    celestial.className = isNight ? "moon" : "sun";
    scene.appendChild(celestial);

    for (let i = 0; i < 6; i++) {
        const cloud = document.createElement("div");
        cloud.className = "cloud";
        scene.appendChild(cloud);
    }

    scene.appendChild(document.createElement("br"));

    for (let i = 0; i < 6; i++) {
        const tree = document.createElement("div");
        tree.className = "tree";

        const leaves = document.createElement("div");
        leaves.className = "leaves";

        const trunk = document.createElement("div");
        trunk.className = "trunk";

        tree.appendChild(leaves);
        tree.appendChild(trunk);
        scene.appendChild(tree);
    }
}
