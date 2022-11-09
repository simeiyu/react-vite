import { PropsWithChildren } from 'react' 
import Aside from './aside'
import Header from './header'
import './index.less'

export default function (props: PropsWithChildren) {
  return <section className='sp-layout'>
    <Header />
    <Aside />
    <main className='sp-layout-content'>
      { props.children }
    </main>
  </section>
}

