const productos = [
    {
        id: 1,
        nombre: "Tensor Trasero Shimano Deore M5100",
        categoria: "transmision",
        etiqueta: "Top Ventas",
        precio: 185000,
        descripcion: "Cambio trasero Shadow RD+ de 11 velocidades con estabilizador de cadena para MTB.",
        imagen: "https://tiendadbicis.com/wp-content/uploads/2023/10/repuestos-shimano.jpg"
    },
    {
        id: 2,
        nombre: "Kit Frenos Hidráulicos Shimano MT200",
        categoria: "frenos",
        etiqueta: "Listo para instalar",
        precio: 245000,
        descripcion: "Par de frenos hidráulicos purgados de fábrica con maniguetas ergonómicas.",
        imagen: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        nombre: "Cadena KMC X11 Extra Light",
        categoria: "transmision",
        etiqueta: "11 Vel",
        precio: 112000,
        descripcion: "Cadena ultraligera con recubrimiento de titanio y eslabón rápido MissingLink.",
        imagen: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        nombre: "Coraza MTB Maxxis Ikon 29x2.20 TR",
        categoria: "llantas",
        etiqueta: "Tubeless Ready",
        precio: 158000,
        descripcion: "Llanta de competición con compuesto dual 3C MaxxSpeed y protección lateral EXO.",
        imagen: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        nombre: "Pacha Cassette SunRace 11-50T",
        categoria: "transmision",
        etiqueta: "Monoplato",
        precio: 210000,
        descripcion: "Piñonera de amplio rango con araña de aluminio anodizado para subidas extremas.",
        imagen: "https://www.bttbike.com/foto/o/12/05/1205370784_bicicletas_020.jpg"
    },
    {
        id: 6,
        nombre: "Pastillas de Freno Cerámicas Pro",
        categoria: "frenos",
        etiqueta: "Alta Frenada",
        precio: 42000,
        descripcion: "Disipación térmica superior y frenado silencioso en condiciones húmedas o secas.",
        imagen: "https://i.pinimg.com/originals/e4/2b/a9/e42ba94613f78040b6009c20b72d5bea.jpg"
    },
    {
        id: 7,
        nombre: "Casco Aerodinámico VeloPro MIPS",
        categoria: "accesorios",
        etiqueta: "Seguridad",
        precio: 195000,
        descripcion: "Sistema de protección contra impactos rotacionales y 24 canales de ventilación.",
        imagen: "https://images.unsplash.com/photo-1557803175-2f8c49131d0c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        nombre: "Kit Luces LED 1000 Lúmenes USB-C",
        categoria: "accesorios",
        etiqueta: "Impermeable IPX6",
        precio: 68000,
        descripcion: "Faro delantero de aluminio con soporte rápido + luz trasera inteligente de freno.",
        imagen: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 9,
        nombre: "Pedales Plataforma Aluminio CNC",
        categoria: "componentes",
        etiqueta: "Rodamientos Sellados",
        precio: 98000,
        descripcion: "Cuerpo mecanizado con 10 pines reemplazables por cara para máximo agarre.",
        imagen: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 10,
        nombre: "Manubrio Fibra de Carbono 760mm",
        categoria: "componentes",
        etiqueta: "Ultraligero 185g",
        precio: 175000,
        descripcion: "Manillar plano acabado mate 3K que absorbe vibraciones en terrenos técnicos.",
        imagen: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 11,
        nombre: "Rotor Disco Flotante 180mm",
        categoria: "frenos",
        etiqueta: "6 Tornillos",
        precio: 65000,
        descripcion: "Disco ventilado de acero inoxidable con núcleo de aluminio para evitar deformaciones.",
        imagen: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 12,
        nombre: "Sillín Antiprostático ErgoFlow",
        categoria: "componentes",
        etiqueta: "Confort Ruta/MTB",
        precio: 89000,
        descripcion: "Diseño anatómico con canal central de alivio y rieles de cromoly de alta resistencia.",
        imagen: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=600&q=80"
    }
];

let carrito = [];
let categoriaActual = "todos";

function renderizarProductos(lista) {
    const contenedor = document.getElementById("contenedor-productos");
    contenedor.innerHTML = "";

    if (lista.length === 0) {
        contenedor.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color: var(--text-muted);">No se encontraron repuestos con ese nombre.</p>`;
        return;
    }

    lista.forEach((prod, index) => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("producto-card");
        tarjeta.style.animationDelay = `${index * 0.05}s`;

        tarjeta.innerHTML = `
            <div class="producto-img-contenedor">
                <span class="etiqueta-badge">${prod.etiqueta}</span>
                <img src="${prod.imagen}" alt="${prod.nombre}" class="producto-img">
            </div>
            <div class="producto-info">
                <div>
                    <span class="producto-categoria">${prod.categoria}</span>
                    <h3>${prod.nombre}</h3>
                    <p class="producto-desc">${prod.descripcion}</p>
                </div>
                <div class="producto-precio-fila">
                    <span class="producto-precio">$${prod.precio.toLocaleString('es-CO')}</span>
                    <button class="btn-agregar" onclick="agregarAlCarrito(${prod.id})">+ Agregar</button>
                </div>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    });
}

function filtrarProductos(categoria, boton) {
    categoriaActual = categoria;
    document.querySelectorAll(".btn-filtro").forEach(btn => btn.classList.remove("activo"));
    boton.classList.add("activo");
    document.getElementById("buscador-productos").value = "";

    if (categoria === "todos") {
        renderizarProductos(productos);
    } else {
        const filtrados = productos.filter(p => p.categoria === categoria);
        renderizarProductos(filtrados);
    }
}

function buscarProducto() {
    const texto = document.getElementById("buscador-productos").value.toLowerCase();
    const filtrados = productos.filter(p => {
        const coincideCategoria = categoriaActual === "todos" || p.categoria === categoriaActual;
        const coincideTexto = p.nombre.toLowerCase().includes(texto) || p.descripcion.toLowerCase().includes(texto);
        return coincideCategoria && coincideTexto;
    });
    renderizarProductos(filtrados);
}

function toggleCarrito() {
    document.getElementById("panel-carrito").classList.toggle("abierto");
    document.getElementById("overlay-carrito").classList.toggle("activo");
}

function mostrarToast(mensaje) {
    const toast = document.getElementById("notificacion-toast");
    toast.innerText = mensaje;
    toast.classList.add("visible");
    setTimeout(() => {
        toast.classList.remove("visible");
    }, 2400);
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const itemExistente = carrito.find(item => item.id === id);

    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    actualizarCarrito();
    mostrarToast(`✅ ${producto.nombre} agregado`);

    const btnNav = document.getElementById("btn-carrito-nav");
    btnNav.classList.remove("animar-rebote");
    void btnNav.offsetWidth;
    btnNav.classList.add("animar-rebote");
}

function cambiarCantidad(id, cambio) {
    const item = carrito.find(p => p.id === id);
    if (!item) return;

    item.cantidad += cambio;

    if (item.cantidad <= 0) {
        carrito = carrito.filter(p => p.id !== id);
    }

    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

function actualizarCarrito() {
    const contenedorItems = document.getElementById("items-carrito");
    const contador = document.getElementById("contador-carrito");
    const totalElemento = document.getElementById("total-carrito");

    contenedorItems.innerHTML = "";

    let totalArticulos = 0;
    let totalPrecio = 0;

    if (carrito.length === 0) {
        contenedorItems.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío. ¡Explora el catálogo!</p>';
    } else {
        carrito.forEach(item => {
            totalArticulos += item.cantidad;
            totalPrecio += item.precio * item.cantidad;

            const div = document.createElement("div");
            div.classList.add("item-carrito");
            div.innerHTML = `
                <div class="item-detalles">
                    <h4>${item.nombre}</h4>
                    <p>$${(item.precio * item.cantidad).toLocaleString('es-CO')}</p>
                </div>
                <div class="item-controles">
                    <button class="btn-cant" onclick="cambiarCantidad(${item.id}, -1)">-</button>
                    <span><strong>${item.cantidad}</strong></span>
                    <button class="btn-cant" onclick="cambiarCantidad(${item.id}, 1)">+</button>
                </div>
            `;
            contenedorItems.appendChild(div);
        });
    }

    contador.innerText = totalArticulos;
    totalElemento.innerText = `$${totalPrecio.toLocaleString('es-CO')}`;
}

function procesarCompra() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío. Agrega al menos un repuesto antes de comprar.");
        return;
    }

    const total = document.getElementById("total-carrito").innerText;
    alert(`⚡ ¡Pedido confirmado en VeloTech Gear!\n\nTotal a pagar: ${total}\nNuestro equipo preparará tus repuestos para despacho inmediato.`);
    
    vaciarCarrito();
    toggleCarrito();
}

function mostrarServicio(servicio) {
    alert("Has seleccionado: " + servicio + ". Déjanos tus datos en la sección de Contacto para programar tu atención.");
}

function ampliarImagen(contenedor) {
    const img = contenedor.querySelector("img");
    if (img.style.transform === "scale(1.25)") {
        img.style.transform = "scale(1)";
    } else {
        img.style.transform = "scale(1.25)";
    }
}

function enviarFormulario(evento) {
    evento.preventDefault();
    let nombre = document.getElementById("nombre").value;
    alert("¡Gracias " + nombre + "! Tu solicitud ha sido enviada al taller de VeloTech.");
    evento.target.reset();
}

document.addEventListener("DOMContentLoaded", () => {
    renderizarProductos(productos);
});