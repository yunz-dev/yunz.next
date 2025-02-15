import { Codepen, Facebook, Github, Instagram, LinkedIn, X } from '@/utils/icons'
import Image from 'next/image'

const socialIcons = [
  { href: '', icon: Github },
  { href: '', icon: LinkedIn },
  { href: '', icon: Codepen },
  { href: '', icon: X },
  { href: '', icon: Instagram },
  { href: '', icon: Facebook },
]

const footerSections = [
  { title: 'John Doe', href: '#home', content: 'Crafting high-performance web applications.' },
  { title: 'About', href: '#about', content: 'Get to know my journey & expertise.' },
  { title: 'Projects', href: '#projects', content: 'Explore my most impactful work.' },
  { title: 'Skills', href: '#skills', content: 'Technologies and tools I excel at.' },
  {
    title: 'Services',
    href: '#services',
    content: 'What I can offer to bring value to your project.',
  },
]

const Footer = () => (
  <footer id="contact" className="bg-secondary px-4 text-white md:px-0">
    <div className="mx-auto max-w-[1200px] py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
        {footerSections.map((section, index) => (
          <section
            key={index}
            className="rounded-lg transition-colors duration-300 hover:bg-primary md:p-4">
            <a href={section.href} className="block">
              <h2 className="text-base font-semibold text-white lg:text-lg">{section.title}</h2>
              <p className="mt-2 text-sm text-gray-400">{section.content}</p>
            </a>
          </section>
        ))}
      </div>
    </div>

    <hr className="h-0 w-full border-t border-[#2B3E6E]" />

    <div className="mx-auto max-w-[1200px] px-4 py-8">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <p className="mb-4 text-sm font-normal md:mb-0">© 2025 Abdul Basit | Coded with 💜</p>
        <ul className="flex space-x-5">
          {socialIcons.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer bg-transparent transition-transform duration-300 hover:scale-110">
              <a href={item.href} className="flex h-full w-full items-center justify-center">
                <Image src={item.icon} width={22} height={22} alt={item.href} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
