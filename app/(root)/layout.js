
import { ClerkProvider } from '@clerk/nextjs';
import '../globals.css';
import LeftSideBar from '@/components/layout/LeftSideBar';
import MainContainer from '@/components/layout/MainContainer';
import RightSideBar from '@/components/layout/RightSideBar';
import TopBar from '@/components/layout/TopBar';
import BottomBar from '../../components/layout/BottomBar';


export default function RootLayout({ children }) {
  
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={` bg-purple-2 text-light-1`}>
          
          <main className='flex flex-row'>
            <LeftSideBar/>
          <MainContainer>
           
            {children}
          </MainContainer>
            <RightSideBar/>
            </main>  
            <BottomBar/>
          
        </body>
      </html>
    </ClerkProvider>
  );
}
