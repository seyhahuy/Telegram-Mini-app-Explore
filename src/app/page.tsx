/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import TelegramWebApp from "@twa-dev/sdk";
import { useLaunchParams, useRawInitData} from '@telegram-apps/sdk-react';

export default function Home() {
  const [user, setUser] = useState<any>(null);
  // const [initDataRaw, setInitDataRaw] = useState<any>(null);
const launchParams=useLaunchParams()
  const data = TelegramWebApp

  
  return (
    <div>
      <h1>Welcome to the Telegram Mini App!</h1>
     {JSON.stringify(data)}
    </div>
  );
}
