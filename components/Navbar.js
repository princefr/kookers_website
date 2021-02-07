import styles from '../styles/Home.module.css'


export default function Navbar(){
    return (<div style={styles}>
        <div class="mx-auto  p-6">
            <nav class="flex-row md:justify-between">
                <div class="flex flex-row justify-between">
                <a href="/">
                    <span class="sr-only">Kookers</span>
                    <img class="h-8 w-auto sm:h-12" src="assets/logo_black.svg"/>
                </a>


                </div>

            </nav>
        </div>
</div>)
}

