import Link from 'next/link'

export default function ProfileDefault({ children }) {
  return (
    <div>
      <h1>나의 포트폴리오</h1>
      <h3>주제: 자전거 추천 사이트</h3>

      <div className="box1">
        <div>1학기</div>
        <hr />
        1-1: Nextjs 테스트 예제 주소(github) : https://github.com/kmw1122/was
        1-2: Nextjs 테스트 예제 주소(vercel) : https://was-kmw1122.vercel.app/
        2-1: NextShop 예제 주소(github) : https://github.com/kmw1122/nextshop
        2-2: NextShop 예제 주소(vercel) : https://nextshop-z4ws.vercel.app/
      </div>
      <div className="box2">
        <div>2학기</div>
        <hr />
        1-1: Nextshop 테스트 예제 주소(github) :
        https://github.com/kmw1122/nextshop 1-2 : Nextshop 테스트 예제
        주소(vercel) : (x) 2-1: 개인 포트폴리오 웹사이트(github) :
        https://github.com/kmw1122/KMWwebpage 2-2 : 개인 포트폴리오
        웹사이트(vercel) : https://kmwwebpage-kmw1122.vercel.app/
      </div>
    </div>
  )
}
