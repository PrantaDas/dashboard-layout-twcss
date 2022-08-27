        import React, { useState } from 'react';
        import { GiHamburgerMenu } from "react-icons/gi";
        import DashIcons from '../../../Assets/icons/DashIcons/DashIcons'

        // List of items for dashboard
        const items = [
            {
                name: 'Overview',
                icon: DashIcons.logo1,
                path: ''
            },
            {
                name: 'Stats',
                icon: DashIcons.logo2,
                path: ''
            },
            {
                name: 'Products',
                icon: DashIcons.logo3,
                path: ''
            },
            {
                name: 'Disputes',
                icon: DashIcons.logo4,
                path: ''
            },
            {
                name: 'User List',
                icon: DashIcons.logo5,
                path: ''
            },
            {
                name: 'Transactions',
                icon: DashIcons.logo6,
                path: ''
            },
            {
                name: 'Refferals',
                icon: DashIcons.logo7,
                path: ''
            },
            {
                name: 'Chats',
                icon: DashIcons.logo8,
                path: ''
            },
            {
                name: 'Logout',
                icon: DashIcons.logo9,
                path: ''
            }
        ]



        const DashBar = () => {

            // Toggle Icon for dashboard
            const [drawer, setDrawer] = useState(true);




            return (
                <section className='bg-bgColor'>

                    <div class="min-h-screen flex flex-row bg-bgColor">
                        <div class={`flex flex-col items-start justify-start overflow-hidden bg-slate-900`} style={{ width: drawer ? '5rem' : '12rem', transition: 'width 800ms' }}>
                            <div class="flex items-center justify-center -ml-3 h-20 py-4 shadow-md drawer" role='button'>
                                {/* Logo of the website will be placed here */}

                                {drawer && <h1 onClick={() => setDrawer(false)} class="text-3xl uppercase text-white"><GiHamburgerMenu/></h1>}
                                {drawer || <h1 onClick={() => setDrawer(true)} class="text-3xl uppercase text-white ">Logo </h1>}

                            </div>
                            <ul class="flex flex-col py-4">
                                {/* Items of the dashboard */}
                                {
                                    items.map(item => <li className='py-2 '>
                                        <a href="_#" class="flex flex-row items-center h-12  text-gray-500 ">
                                            <span class="inline-flex items-center justify-center h-12 w-14 text-lg text-gray-400">
                                                {item.icon}
                                            </span>
                                            <span class='text-sm font-medium lg:text-lg lg:font-bold ' style={{ display: drawer ? "none" : 'block' }}>{item.name}</span>
                                        </a>
                                    </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </section >

            );
        };

        export default DashBar;