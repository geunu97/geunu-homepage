/* next13 - https://nextjs.org/docs*/

/** fetch를 사용할 경우, 기본적으로 SSG설정이 된다. 이 부분은 fetch내의 cache옵션을 통해서 지정해 줄 수 있다. 
 *    const options = {
 *      method: 'POST',
 *      body: JSON.stringify({
 *        toPhoneNumber: phoneNumber,
 *      }),
 *      cache: 'no-store', // cache: 'force-cache'
 *    };
 */

/** tag설정과 revalidateTag를 통해서, querykey처럼 데이터 페칭시 사용할 수 있다.
 *  Tag 설정
 *    export const getTime = async (location: string): Promise<any> => {
 *    const res = await fetch(`https://timeapi.io/api/Time/current/zone?timeZone=Asia/${location}`, {
 *      next: {
 *        tags: ['time'],
 *      },
 *      cache: 'no-store', // cache: 'force-cache'
 *    });
 * 
 * RevalidateTag 설정
 *   'use server'
 *    import { revalidateTag } from 'next/cache'
 *    export default async function revalidatorTag(tag: string) {
 *      revalidateTag(tag)
 *    }
 * 
 * RevalidateTag 사용
 *   const onClickButton = async () => {
 *      await revalidatorTag('time')
 *   }
 */
