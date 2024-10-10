// Site Content Configuration
const siteContent = {
    labName: "Laboratory of Cell Ethology",
    tagline: "Digitizing living organisms one cell at a time",
    mission: "Our mission is to understand life by simulating it, from individual cells to complex organisms, and by simulating it we hope to improve it.",
    
    // Research Areas
    researchAreas: [
        {
            title: "Animating tissue",
            image: "/asset/filming_tissue.webp",
            description: "Cell dynamics is a product of its environment. Learning how cells behave in their native tissue context is crucial for identifying effective therapeutic targets"
        },
        {
            title: "Designing cells",
            image: "/asset/cajal_neuron.webp",
            description: "Cells reprogrammed to treat diseases display highly variable behavior inside patients. We need to engineer more consistent behavior in inconsistent environments."
        },
        {
            title: "Interpreting models",
            image: "/asset/cube.png",
            description: "We mostly treat AI models as a black box: something goes in and a response comes out. This is not acceptable for models that will be used to treat human diseases. "
        },
    ],
    
    // Publications
    selectedPublications: [
        {
            title: "Identifying perturbations that boost T-cell infiltration into tumors via counterfactual learning of their spatial proteomic profiles",
            description: "Find drug targets from tumor images",
            image: "/asset/pub/tumor.png",
            url: "https://www.biorxiv.org/content/10.1101/2023.10.12.562107v3"
        },
        {
            title: "Localization of signaling receptors maximizes cellular information acquisition in spatially structured natural environments",
            description: "How cells navigate complex environments",
            image: "/asset/pub/cell_sense.png",
            url: "https://www.cell.com/cell-systems/fulltext/S2405-4712(22)00225-3"
        },
        {
            title: "Inferring gene regulation dynamics from static snapshots of gene expression variability",
            description: "Learn dynamical systems from non-dynamical data",
            image: "/asset/pub/clock.png",
            url: "https://journals.aps.org/pre/abstract/10.1103/PhysRevE.104.044406"
        }
    ],

    // Publications
    allPublications: [
        {
            title: "ViTally Consistent: Scaling Biological Representation Learning for Cell Microscopy",
            authors: "Kian Kenyon-Dean, Zitong Jerry Wang, John Urbanik, Konstantin Donhauser, Jason Hartford, Saber Saberian, Nil Sahin, Ihab Bendidi, Safiye Celik, Marta Fay, Juan Sebastián Rodríguez Vera, Imran S Haque, Oren Kraus ",
            journal: "arXiv (2024)",
            image: "/asset/pub/cells.png",
            url: "https://openreview.net/pdf?id=3EbighfxpM"
        },
        {
            title: "Identifying perturbations that boost T-cell infiltration into tumors via counterfactual learning of their spatial proteomic profiles",
            authors: "Zitong Jerry Wang, Abdullah Farooq, Yu-Jen Chen, Aman Bhargava, Alexander Xu, Matt Thomson",
            journal: "bioRxiv (2024), Nature Biomedical Engineering (in press)",
            image: "/asset/pub/tumor.png",
            url: "https://www.biorxiv.org/content/10.1101/2023.10.12.562107v3"
        },
        {
            title: "Multi-ContrastiveVAE disentangles perturbation effects in single cell images from optical pooled screens",
            authors: "Zitong Jerry Wang, Romain Lopez, Jan-Christian Hütter, Takamasa Kudo, Heming Yao, Philipp Hanslovsky, Burkhard Höckendorf, Rahul Moran, David Richmond, Aviv Regev",
            journal: "ICLR 2024 Workshop on Machine Learning for Genomics Explorations",
            image: "/asset/pub/cell.png",
            url: "https://openreview.net/pdf?id=PcpeaehdlL"
        },
        {
            title: "Localization of signaling receptors maximizes cellular information acquisition in spatially structured natural environments",
            authors: "Zitong Jerry Wang, Matt Thomson",
            journal: "Cell Systems (2022)",
            image: "/asset/pub/cell_sense.png",
            url: "https://www.cell.com/cell-systems/fulltext/S2405-4712(22)00225-3"
        },
        {
            title: "Inferring gene regulation dynamics from static snapshots of gene expression variability",
            authors: "Euan Joly-Smith, Zitong Jerry Wang, Andreas Hilfinger",
            journal: "Physical Review E (2021)",
            image: "/asset/pub/clock.png",
            url: "https://journals.aps.org/pre/abstract/10.1103/PhysRevE.104.044406"
        }
    ]
};