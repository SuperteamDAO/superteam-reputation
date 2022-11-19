import Image from 'next/image';
export default function TopRanking() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <div>
              <Image src="/2.jpg" width="200" height="200" alt="" />
            </div>
            <h3>
              <span>2</span>
            </h3>
            <h2>Pallavi</h2>
          </li>
          <li>
            <div>
              <Image src="/crown-1.png" width="64" height="64" alt="" />
            </div>
            <div>
              <Image src="/2.jpg" width="200" height="200" alt="" />
            </div>
            <span>1</span>
            <h2>Pallavi</h2>
          </li>
          <li>
            <div>
              <Image src="/2.jpg" width="200" height="200" alt="" />
            </div>
            <span>3</span>
            <h2>Pallavi</h2>
          </li>
        </ul>
      </div>
    </div>
  );
}
