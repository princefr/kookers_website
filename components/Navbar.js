import styles from '../styles/Home.module.css'


export default function Navbar(){
    return (<div style={styles}>
        <div class="mx-auto  p-6">
            <nav class="flex-row md:justify-between">
                <div class="flex flex-row justify-between">
                <div>
                    <a href="/" class="w-full flex items-center justify-center">
                        <img class="object-contain h-8" src="assets/logo_black.svg"/>
                    </a>
                </div>


                </div>

            </nav>
        </div>
</div>)
}

