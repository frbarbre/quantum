export const products = [
  {
    id: 1,
    slug: "starter",
    name: "The Starter",
    shortName: "Starter",
    category: "office",
    new: false,
    price: 640,
    quantity: 0,
    image: "/starter/starter-main.png",
    features:
      "The Starter features an efficient Intel Core i3 processor, delivering ample power for everyday tasks like web browsing, document editing, and light multitasking. Accompanied by 8GB of DDR4 RAM, it ensures smooth performance for casual users. The system utilizes integrated graphics for standard display needs, providing adequate visual performance for everyday use.",
    description:
      "The Starter is a budget-friendly PC designed for everyday tasks such as web browsing, email, and light office work. It's perfect for students or casual users who don't require high-end performance.",
    gallery: {
      first: "/starter/starter-gallery-1.png",
      second: "/starter/starter-gallery-2.png",
    },
    components: [
      {
        component: "CPU",
        details: "Intel Core i3 13100F",
        price: 150,
        icon: "/icons/cpu.svg",
      },
      {
        component: "GPU",
        details: "Integrated Graphics",
        price: 0,
        icon: "/icons/gpu.svg",
      },
      {
        component: "MB",
        details: "ASUS PRIME H610M-R",
        price: 100,
        icon: "/icons/mb.svg",
      },
      {
        component: "RAM",
        details: "Corsair Vengance 16GB DDR4 3200MHz",
        price: 55,
        icon: "/icons/ram.svg",
      },
      {
        component: "SSD",
        details: "Samsung 980 512GB M.2 SSD",
        price: 35,
        icon: "/icons/ssd.svg",
      },
      {
        component: "PSU",
        details: "Corsair CV550 550W 80 Plus Bronze",
        price: 65,
        icon: "/icons/psu.svg",
      },
      {
        component: "Cooler",
        details: "Intel Laminar RM1",
        price: 0,
        icon: "/icons/cooler.svg",
      },
      {
        component: "Case",
        details: "NZXT H5 Flow",
        price: 95,
        icon: "/icons/case.svg",
      },
      {
        component: "OS",
        details: "Windows 11",
        price: 90,
        icon: "/icons/os.svg",
      },
    ],
    others: [
      {
        slug: "gaming/workhorse",
        name: "The Workhorse",
        image: "/workhorse/workhorse-main.png",
      },
      {
        slug: "gaming/beast",
        name: "The Beast",
        image: "/beast/beast-main.png",
      },
      {
        slug: "gaming/powerhouse",
        name: "The Powerhouse",
        image: "/ultimate/ultimate-main.png",
      },
    ],
  },
  {
    id: 2,
    slug: "workhorse",
    name: "The Workhorse",
    shortName: "Workhorse",
    category: "gaming",
    image: "/workhorse/workhorse-main.png",
    new: false,
    price: 1130,
    quantity: 0,
    features:
      "Featuring the capable AMD Ryzen 5 processor, The Workhorse delivers enhanced performance, ideal for moderate gaming, content creation, and multitasking. With 16GB of DDR4 RAM, it's capable of handling more demanding applications simultaneously. The NVIDIA GeForce RTX 4060 graphics card ensures smooth gaming and graphic-intensive tasks, delivering impressive visual performance and rendering capabilities. The 512GB SSD offers faster data access for improved productivity.",
    description:
      "The Workhorse offers a step up in performance, suitable for moderate gaming, content creation, and multitasking. It provides a balance of power and affordability for users seeking better performance without an extremely high budget.",
    gallery: {
      first: "/workhorse/workhorse-gallery-1.png",
      second: "/workhorse/workhorse-gallery-2.png",
    },
    components: [
      {
        component: "CPU",
        details: "AMD Ryzen 5 7600",
        price: 250,
        icon: "/icons/cpu.svg",
      },
      {
        component: "GPU",
        details: "NVIDIA GeForce RTX 4060",
        price: 375,
        icon: "/icons/gpu.svg",
      },
      {
        component: "MB",
        details: "ASUS PRIME H610M-R",
        price: 100,
        icon: "/icons/mb.svg",
      },
      {
        component: "RAM",
        details: "Corsair Vengance 16GB DDR4 3200MHz",
        price: 55,
      },
      {
        component: "SSD",
        details: "Samsung 980 1TB M.2 SSD",
        price: 65,
      },
      {
        component: "PSU",
        details: "600W",
        price: 100,
      },
      {
        component: "CPU Cooler",
        details: "Liquid Cooler",
        price: 100,
      },
      {
        component: "Case",
        details: "Mid Tower Case",
        price: 80,
      },
      {
        component: "Operating System",
        details: "Windows 11",
        price: 90,
      },
    ],
    others: [
      {
        slug: "office/starter",
        name: "The Starter",
        image: "/starter/starter-main.png",
      },
      {
        slug: "gaming/beast",
        name: "The Beast",
        image: "/beast/beast-main.png",
      },
      {
        slug: "gaming/powerhouse",
        name: "The Powerhouse",
        image: "/ultimate/ultimate-main.png",
      },
    ],
  },
  {
    id: 3,
    slug: "beast",
    name: "The Beast",
    shortName: "Beast",
    category: "gaming",
    image: "/beast/beast-main.png",
    new: true,
    price: 2500,
    quantity: 0,
    features:
      "The Beast is a high-end powerhouse equipped with the top-tier Intel Core i9 Extreme processor, providing exceptional performance for demanding tasks like gaming, video editing, and software development. Supported by 32GB of DDR4 RAM, it handles multitasking effortlessly, ensuring smooth operation even with resource-hungry applications. The NVIDIA GeForce RTX 4080 graphics card offers incredible gaming performance and accelerates creative workflows with real-time ray tracing and AI-enhanced graphics capabilities. The combination of a 1TB SSD and 2TB HDD provides both speed and ample storage capacity.",
    description:
      "The Beast is a high-end powerhouse designed for demanding tasks like gaming, video editing, and intensive workloads. Its robust configuration ensures top-notch performance and multitasking capabilities for advanced users and professionals.",
    gallery: {
      first: "/beast/beast-gallery-1.png",
      second: "/beast/beast-gallery-2.png",
    },
    components: [
      {
        component: "CPU",
        details: "Intel Core i9 or AMD Ryzen 9",
        price: 600,
      },
      {
        component: "RAM",
        details: "32GB DDR4",
        price: 300,
      },
      {
        component: "Storage",
        details: "1TB SSD + 2TB HDD",
        price: 350,
      },
      {
        component: "Graphics",
        details: "NVIDIA GeForce RTX 4080",
        price: 900,
      },
      {
        component: "Operating System",
        details: "Windows 11 Pro",
        price: 150,
      },
      {
        component: "Case",
        details: "Full Tower Case",
        price: 200,
      },
      {
        component: "CPU Cooler",
        details: "Liquid Cooler",
        price: 150,
      },
      {
        component: "PSU",
        details: "800W",
        price: 180,
      },
    ],
    others: [
      {
        slug: "gaming/workhorse",
        name: "The Workhorse",
        image: "/workhorse/workhorse-main.png",
      },
      {
        slug: "gaming/powerhouse",
        name: "The Powerhouse",
        image: "/ultimate/ultimate-main.png",
      },
      {
        slug: "enterprise/enterprise",
        name: "The Enterprise",
        image: "/enterprise/enterprise-main.png",
      },
    ],
  },
  {
    id: 4,
    slug: "powerhouse",
    name: "The Powerhouse",
    shortName: "Powerhouse",
    category: "gaming",
    image: "/ultimate/ultimate-main.png",
    new: true,
    price: 4000,
    quantity: 0,
    features:
      "The Powerhouse boasts an elite-level AMD Ryzen Threadripper processor, delivering unparalleled computing power for demanding tasks such as 3D rendering, high-end gaming, and heavy content creation. With a massive 64GB of DDR5 RAM, it excels in multitasking and handles memory-intensive applications with ease. The NVIDIA GeForce RTX 4090 graphics card provides exceptional graphics performance for complex rendering, gaming, and creative work. The 2TB SSD and 4TB HDD configuration offers immense storage space and rapid data access for large-scale projects.",
    description:
      "The Powerhouse is an elite-grade machine designed for uncompromising performance in gaming, 3D rendering, AI development, and heavy multitasking. It offers top-tier components for users who demand the absolute best in computing power.",
    gallery: {
      first: "/ultimate/ultimate-gallery-1.png",
      second: "/ultimate/ultimate-gallery-2.png",
    },
    components: [
      {
        component: "CPU",
        details: "Intel Core i9 Extreme or AMD Ryzen Threadripper",
        price: 1500,
      },
      {
        component: "RAM",
        details: "64GB DDR5",
        price: 800,
      },
      {
        component: "Storage",
        details: "2TB SSD + 4TB HDD",
        price: 900,
      },
      {
        component: "Graphics",
        details: "NVIDIA GeForce RTX 4090",
        price: 1800,
      },
      {
        component: "Operating System",
        details: "Windows 11 Pro",
        price: 150,
      },
      {
        component: "Case",
        details: "Super Tower Case",
        price: 300,
      },
      {
        component: "CPU Cooler",
        details: "Liquid Cooling System",
        price: 250,
      },
      {
        component: "PSU",
        details: "1000W",
        price: 250,
      },
    ],
    others: [
      {
        slug: "gaming/workhorse",
        name: "The Workhorse",
        image: "/workhorse/workhorse-main.png",
      },
      {
        slug: "gaming/beast",
        name: "The Beast",
        image: "/beast/beast-main.png",
      },
      {
        slug: "enterprise/enterprise",
        name: "The Enterprise",
        image: "/enterprise/enterprise-main.png",
      },
    ],
  },
  {
    id: 5,
    slug: "enterprise",
    name: "The Enterprise",
    shortName: "Enterprise",
    category: "enterprise",
    image: "/enterprise/enterprise-main.png",
    new: true,
    price: 5000,
    quantity: 0,
    features:
      "The Enterprise is an enterprise-grade workstation powered by top-tier components, including the AMD Ryzen Threadripper processor, ensuring unmatched performance for intensive server workloads, scientific simulations, and data analysis. Supported by a colossal 128GB of DDR5 ECC RAM, it efficiently handles resource-intensive tasks and large-scale data processing. The NVIDIA Quadro A6000 graphics card provides enterprise-level graphics performance, accelerating complex computations, 3D modeling, scientific simulations, and rendering tasks with its high VRAM capacity and specialized features. The 4TB NVMe SSD combined with an 8TB HDD ensures lightning-fast data access and immense storage capability, perfect for complex enterprise-level operations.",
    description:
      "The Enterprise is an enterprise-grade workstation built for unparalleled efficiency in professional environments. It's designed to handle complex tasks such as scientific simulations, data analysis, and heavy server workloads with reliability and top-notch performance.",
    gallery: {
      first: "/enterprise/enterprise-gallery-1.png",
      second: "/enterprise/enterprise-gallery-2.png",
    },
    components: [
      {
        component: "CPU",
        details: "Intel Xeon or AMD EPYC Processor",
        price: 2000,
      },
      {
        component: "RAM",
        details: "128GB DDR5 ECC",
        price: 1600,
      },
      {
        component: "Storage",
        details: "4TB NVMe SSD + 8TB HDD",
        price: 2000,
      },
      {
        component: "Graphics",
        details: "NVIDIA Quadro RTX 8000",
        price: 2400,
      },
      {
        component: "Operating System",
        details: "Windows 11 Pro for Workstations",
        price: 300,
      },
      {
        component: "Case",
        details: "Rackmount Server Case",
        price: 500,
      },
      {
        component: "CPU Cooler",
        details: "Enterprise-grade Cooling System",
        price: 600,
      },
      {
        component: "PSU",
        details: "1500W Redundant PSU",
        price: 800,
      },
    ],
    others: [
      {
        slug: "gaming/workhorse",
        name: "The Workhorse",
        image: "/workhorse/workhorse-main.png",
      },
      {
        slug: "gaming/beast",
        name: "The Beast",
        image: "/beast/beast-main.png",
      },
      {
        slug: "gaming/powerhouse",
        name: "The Powerhouse",
        image: "/ultimate/ultimate-main.png",
      },
    ],
  },
];
