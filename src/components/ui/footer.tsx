import {
    Globe,
    Mail,
    MessageCircle,
    Linkedin,
    Send,
    Instagram,
    Facebook,
} from 'lucide-react'

const links = [
    {
        title: 'About',
        href: '#about',
    },
    {
        title: 'Expertise',
        href: '#expertise',
    },
    {
        title: 'Testimonials',
        href: '#testimonials',
    },
    {
        title: 'Contact',
        href: '#contact',
    },
    {
        title: 'Services',
        href: '#services',
    },
    {
        title: 'Portfolio',
        href: '#portfolio',
    },
]

export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32 bg-muted/20">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Lemesa Yadeta</h3>
                    <p className="text-muted-foreground">IT Professional & Systems Administrator</p>
                </div>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.title}</span>
                        </a>
                    ))}
                </div>
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    <a
                        href="mailto:Lemu4515@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Email"
                        className="text-muted-foreground hover:text-primary block">
                        <Mail className="size-6" />
                    </a>
                    <a
                        href="tel:+251915764334"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Phone"
                        className="text-muted-foreground hover:text-primary block">
                        <MessageCircle className="size-6" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/lemesa-yadeta-085241155?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-muted-foreground hover:text-primary block">
                        <Linkedin className="size-6" />
                    </a>
                    <a
                        href="https://t.me/Barch_Lemu"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Telegram"
                        className="text-muted-foreground hover:text-primary block">
                        <Send className="size-6" />
                    </a>
                    <a
                        href="https://lemesayadeta.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Website"
                        className="text-muted-foreground hover:text-primary block">
                        <Globe className="size-6" />
                    </a>
                    <a
                        href="https://www.instagram.com/lemu_barch?igsh=MTAwdGtjYmsxMnMxZA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-muted-foreground hover:text-primary block">
                        <Instagram className="size-6" />
                    </a>
                    <a
                        href="https://www.facebook.com/Lemu.barch"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="text-muted-foreground hover:text-primary block">
                        <Facebook className="size-6" />
                    </a>
                </div>
                <span className="text-muted-foreground block text-center text-sm"> 
                    © {new Date().getFullYear()} Lemesa Yadeta. All rights reserved.
                </span>
            </div>
        </footer>
    )
}