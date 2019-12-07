routes = [{
        path: '/',
        url: 'index.html'
    },
    {
        path: '/menu/',
        url: './pages/app/menu.html'
    },
    {
        path: '/settings/',
        componentUrl: './pages/app/settings.html'
    },
    {
        path: '/about/',
        url: './pages/app/about.html'
    },

    {
        path: '/pr',
        routes: [{
                path: '/gcodes',
                componentUrl: '/pages/pr/gcodes.html'
            },
            {
                path: '/gcodes/:id',
                componentUrl: '/pages/pr/gcode.html'
            },
            {
                path: '/mcodes',
                componentUrl: './pages/pr/mcodes.html'
            },
            {
                path: '/mcodes/:id',
                componentUrl: './pages/pr/mcode.html'
            },
            {
                path: '/sinumerik',
                url: './pages/pr/sinumerik/sinumerik.html',
                routes: [{
                        path: '/all',
                        componentUrl: './pages/pr/sinumerik/sinumerik-all.html'
                    },
                    {
                        path: '/all/:id',
                        componentUrl: './pages/pr/sinumerik/sinumerik-code.html',
                    },
                    {
                        path: '/milling',
                        url: './pages/pr/sinumerik/sinumerik-milling.html',
                        routes: [{
                                path: '/gcodes',
                                componentUrl: './pages/pr/sinumerik/sinumerik-milling-gcodes.html'
                            },
                            {
                                path: '/gcodes/:id',
                                componentUrl: './pages/pr/sinumerik/sinumerik-milling-gcodes-view.html'
                            }
                        ]
                    }
                ]
            },
            {
                path: '/fanuc',
                url: './pages/pr/fanuc/fanuc.html',
                routes: [{
                        path: '/turning/',
                        url: './pages/pr/fanuc/fanuc-turning.html',
                        routes: [{
                                path: '/gcodes/',
                                componentUrl: './pages/pr/fanuc/fanuc-turning-g.html',
                            },
                            {
                                path: '/gcodes/:id',
                                componentUrl: './pages/pr/fanuc/fanuc-turning-g-view.html',
                            },
                            {
                                path: '/mcodes/',
                                componentUrl: './pages/pr/fanuc/fanuc-turning-m.html',
                            },
                            {
                                path: '/mcodes/:id',
                                componentUrl: './pages/pr/fanuc/fanuc-turning-m-view.html',
                            },
                            {
                                path: '/cycle-g20/',
                                url: './pages/pr/fanuc/cycle-g20.html'
                            },
                            {
                                path: '/cycle-g71/',
                                url: './pages/pr/fanuc/cycle-g71.html'
                            },
                            {
                                path: '/cycle-g72/',
                                url: './pages/pr/fanuc/cycle-g72.html'
                            },
                            {
                                path: '/cycle-g74/',
                                url: './pages/pr/fanuc/cycle-g74.html'
                            },
                            {
                                path: '/cycle-g75/',
                                url: './pages/pr/fanuc/cycle-g75.html'
                            },
                            {
                                path: '/cycle-g76/',
                                url: './pages/pr/fanuc/cycle-g76.html'
                            },

                            {
                                path: '/cycle-g90/',
                                url: './pages/pr/fanuc/cycle-g90.html'
                            }
                        ]
                    },
                    {
                        path: '/milling/',
                        url: './pages/pr/fanuc/fanuc-milling.html',
                        routes: [{
                                path: '/gcodes/',
                                componentUrl: './pages/pr/fanuc/fanuc-milling-g.html',
                            },
                            {
                                path: '/gcodes/:id',
                                componentUrl: './pages/pr/fanuc/fanuc-milling-g-view.html',
                            },
                            {
                                path: '/mcodes/',
                                componentUrl: './pages/pr/fanuc/fanuc-milling-m.html',
                            },
                            {
                                path: '/mcodes/:id',
                                componentUrl: './pages/pr/fanuc/fanuc-milling-m-view.html',
                            },
                        ]
                    }
                ]
            },
            {
                path: '/haas',
                url: './pages/pr/haas/haas.html',
                routes: [{
                        path: '/turning',
                        url: './pages/pr/haas/haas-turning.html',
                        routes: [{
                                path: '/gcodes',
                                componentUrl: './pages/pr/haas/haas-turning-g.html',
                            },
                            {
                                path: '/gcodes/:id',
                                componentUrl: './pages/pr/haas/haas-turning-g-view.html',
                            },
                            {
                                path: '/mcodes',
                                componentUrl: './pages/pr/haas/haas-turning-m.html',
                            },
                            {
                                path: '/mcodes/:id',
                                componentUrl: './pages/pr/haas/haas-turning-m-view.html',
                            }
                        ]
                    },
                    {
                        path: '/milling',
                        url: './pages/pr/haas/haas-milling.html',
                        routes: [{
                                path: '/gcodes',
                                componentUrl: './pages/pr/haas/haas-milling-g.html',
                            },
                            {
                                path: '/gcodes/:id',
                                componentUrl: './pages/pr/haas/haas-milling-g-view.html',
                            },
                            {
                                path: '/mcodes',
                                componentUrl: './pages/pr/haas/haas-milling-m.html',
                            },
                            {
                                path: '/mcodes/:id',
                                componentUrl: './pages/pr/haas/haas-milling-m-view.html',
                            }
                        ]
                    },
                ]
            }
        ]
    },

    {
        path: '/msg',
        url: './pages/msg/fanuc.html',
        routes: [{
            path: '/fanuc',
            url: './pages/msg/fanuc/fanuc.html',
            routes: [{
                    path: '/turning',
                    url: './pages/msg/fanuc/turning.html',
                    routes: [{
                            path: '/lynx220',
                            componentUrl: './pages/msg/fanuc/turning/lynx220.html',
                        },
                        {
                            path: '/lynx220_m',
                            componentUrl: './pages/msg/fanuc/turning/lynx220_m.html',
                        },
                        {
                            path: '/lynx220_y',
                            componentUrl: './pages/msg/fanuc/turning/lynx220_y.html',
                        },
                        {
                            path: '/puma',
                            componentUrl: './pages/msg/fanuc/turning/puma.html',
                        },
                        {
                            path: '/puma_m',
                            componentUrl: './pages/msg/fanuc/turning/puma_m.html',
                        },
                        {
                            path: '/puma_mx',
                            componentUrl: './pages/msg/fanuc/turning/puma_mx.html',
                        },
                        {
                            path: '/puma_y',
                            componentUrl: './pages/msg/fanuc/turning/puma_y.html',
                        }
                    ]
                },
                {
                    path: '/milling',
                    url: './pages/msg/fanuc/milling.html',
                    routes: [{
                            path: '/bm',
                            componentUrl: './pages/msg/fanuc/milling/bm.html',
                        },
                        {
                            path: '/dbc',
                            componentUrl: './pages/msg/fanuc/milling/dbc.html',
                        },
                        {
                            path: '/dcm',
                            componentUrl: './pages/msg/fanuc/milling/dcm.html',
                        },
                        {
                            path: '/dnm_mynx',
                            componentUrl: './pages/msg/fanuc/milling/dnm_mynx.html',
                        },
                        {
                            path: '/dt',
                            componentUrl: './pages/msg/fanuc/milling/dt.html',
                        },
                        {
                            path: '/hc',
                            componentUrl: './pages/msg/fanuc/milling/hc.html',
                        },
                        {
                            path: '/nx',
                            componentUrl: './pages/msg/fanuc/milling/nx.html',
                        },
                        {
                            path: '/vc',
                            componentUrl: './pages/msg/fanuc/milling/vc.html',
                        },
                        {
                            path: '/vm',
                            componentUrl: './pages/msg/fanuc/milling/vm.html',
                        }
                    ]
                }
            ]
        }]
    },

    // Articles
    //------------------------------------------------------

	{
        path: '/quality/',
        url: './pages/articles/quality.html',
    },
    {
        path: '/quality/table/',
        componentUrl: './pages/articles/quality-table.html',
    },
    //-----------------------------------------------------



    // ОБРАЗОВАНИЕ
    // Допуски формы и расположения поверхностей
    {
        path: '/surface/',
        url: './pages/surface/surface-index.html',
    },
    {
        path: '/surface/surface-line/',
        url: './pages/surface/surface-line.html',
    },
    {
        path: '/surface/surface-plane/',
        url: './pages/surface/surface-plane.html',
    },
    {
        path: '/surface/surface-circle/',
        url: './pages/surface/surface-circle.html',
    },
    {
        path: '/surface/surface-cylinder/',
        url: './pages/surface/surface-cylinder.html',
    },
    {
        path: '/surface/surface-section/',
        url: './pages/surface/surface-section.html',
    },
    {
        path: '/surface/surface-parallel/',
        url: './pages/surface/surface-parallel.html',
    },
    {
        path: '/surface/surface-perpendicular/',
        url: './pages/surface/surface-perpendicular.html',
    },
    {
        path: '/surface/surface-angle/',
        url: './pages/surface/surface-angle.html',
    },
    {
        path: '/surface/surface-axis/',
        url: './pages/surface/surface-axis.html',
    },
    {
        path: '/surface/surface-symmetry/',
        url: './pages/surface/surface-symmetry.html',
    },
    {
        path: '/surface/surface-position/',
        url: './pages/surface/surface-position.html',
    },
    {
        path: '/surface/surface-intersection/',
        url: './pages/surface/surface-intersection.html',
    },
    {
        path: '/surface/surface-palpation-rad/',
        url: './pages/surface/surface-palpation-rad.html',
    },
    {
        path: '/surface/surface-palpation-full/',
        url: './pages/surface/surface-palpation-full.html',
    },
    {
        path: '/surface/surface-palpation-way/',
        url: './pages/surface/surface-palpation-way.html',
    },
    {
        path: '/surface/surface-palpation-full-rad/',
        url: './pages/surface/surface-palpation-full-rad.html',
    },
    {
        path: '/surface/surface-palpation-full-t/',
        url: './pages/surface/surface-palpation-full-t.html',
    },
    {
        path: '/surface/surface-profile/',
        url: './pages/surface/surface-profile.html',
    },
    {
        path: '/surface/surface-surface/',
        url: './pages/surface/surface-surface.html',
    },
    {
        path: '/surface/surface-conicity/',
        url: './pages/surface/surface-conicity.html',
    },
    {
        path: '/surface/surface-sum/',
        url: './pages/surface/surface-sum.html',
    },

    //--
    {
        path: '/education/',
        url: './pages/education/0_education.html',
    },
    {
        path: '/education/1-1.html',
        url: './pages/education/1-1.html',
    },
    {
        path: '/education/1-2.html',
        url: './pages/education/1-2.html',
    },
    {
        path: '/education/1-3.html',
        url: './pages/education/1-3.html',
    },
    {
        path: '/education/1-4.html',
        url: './pages/education/1-4.html',
    },
    //---
    {
        path: '/education/2-1.html',
        url: './pages/education/2-1.html',
    },
    {
        path: '/education/2-2.html',
        url: './pages/education/2-2.html',
    },
    {
        path: '/education/2-3.html',
        url: './pages/education/2-3.html',
    },
    {
        path: '/education/2-4.html',
        url: './pages/education/2-4.html',
    },
    {
        path: '/education/2-5.html',
        url: './pages/education/2-5.html',
    },

    // ------------------------------------------
    {
        path: '/basing/',
        url: './pages/basing/basing.html',
    },




    //------------------------------------------------------

    // Калькулятор расчета режимов резания
    {
        path: '/calc/',
        url: './pages/calc/calc-main.html'
    },
    {
        path: '/calc/turning/',
        url: './pages/calc/calc-turning.html'
    },
    {
        path: '/calc/milling/',
        url: './pages/calc/calc-milling.html'
    },
    {
        path: '/calc/drilling/',
        url: './pages/calc/calc-drilling.html'
    },
    {
        path: '/calc/table/',
        url: './pages/calc/CutSpeedTable.html'
    },

    {
        path: '/debug/',
        componentUrl: './pages/app/debug.html'
    },
    {
        path: '/log/',
        componentUrl: './pages/app/log.html'
    },
    {
        path: '/test/',
        url: 'pages/test.html'
    },



    // Default route (404 page). MUST BE THE LAST
    {
        path: '(.*)',
        url: 'index.html'
    },
    {
        path: '/404/',
        url: '/pages/404.html'
    },

];