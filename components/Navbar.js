import styles from '../styles/Home.module.css'


export default function Navbar(){
    return (<div style={styles}>
        <div className="mx-auto  p-6">
            <nav className="flex-row md:justify-between">
                <div className="flex flex-row justify-between">
                <div>
                    <a href="/" className="w-full flex items-center justify-center">
                        <img className="object-contain h-8" src="assets/logo_black.svg"/>
                    </a>
                </div>


                </div>

            </nav>
        </div>
</div>)
}

