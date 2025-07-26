# AI Golf Admin System

## 개요
AI Golf Admin System은 골프장 예약 관리를 위한 관리자 시스템입니다.

## 기술 스택
- **Frontend**: Next.js 15.4.2, React 19.1.0, TypeScript
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS

## 주요 기능
- 회원 관리
- 골프장 관리
- 티타임 관리
- 예약 관리
- 통계 대시보드
- 크롤링 시스템

## 설치 방법

```bash
# 의존성 설치
npm install

# Prisma 설정
npx prisma generate
npx prisma db push

# 개발 서버 실행
npm run dev
```

## 환경 변수
`.env` 파일에 다음 설정이 필요합니다:
```
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
```

## 프로젝트 구조
```
├── app/              # Next.js App Router
│   ├── admin/       # 관리자 페이지들
│   ├── api/         # API 엔드포인트
│   └── auth/        # 인증 페이지
├── components/       # React 컴포넌트
├── lib/             # 유틸리티 함수
├── prisma/          # Prisma 스키마 및 마이그레이션
└── types/           # TypeScript 타입 정의
```