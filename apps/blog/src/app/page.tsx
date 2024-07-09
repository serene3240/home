import { redirect } from 'next/navigation';

export default function Home() {
  // 홈 화면은 멀티 사용자 기능 적용 후 구현할 예정
  redirect('/@me');
}
