function loglogBigInt(x) {
  const logx = Math.log(Number(x));
  return Math.log(logx);
}

function isPrime(n) {
  if (n < 2n) return false;
  if (n === 2n) return true;
  if (n % 2n === 0n) return false;
  const sqrt = bigintSqrt(n);
  for (let i = 3n; i <= sqrt; i += 2n) {
    if (n % i === 0n) return false;
  }
  return true;
}

function bigintSqrt(n) {
  if (n < 0n) throw "square root of negative numbers is not supported";
  if (n < 2n) return n;
  let x0 = n / 2n;
  let x1 = (x0 + n / x0) / 2n;
  while (x1 < x0) {
    x0 = x1;
    x1 = (x0 + n / x0) / 2n;
  }
  return x0;
}

function predict() {
  const input = document.getElementById("evenInput").value.trim();
  if (!/^\d+$/.test(input)) {
    document.getElementById("result").innerHTML = "Enter a valid number.";
    return;
  }
  const E = BigInt(input);
  if (E % 2n !== 0n || E <= 2n) {
    document.getElementById("result").innerHTML = "Enter an even number > 2.";
    return;
  }

  const sqrtE = Math.sqrt(Number(E));  // still usable here for delta prediction
  const delta = sqrtE * loglogBigInt(E) / Math.log(Number(E));
  const deltaRounded = BigInt(Math.round(delta));

  const center = E / 2n;
  let step = 0n;

  while (step <= 100000n) {
    let p1 = center + step;
    let q1 = E - p1;
    if (isPrime(p1) && isPrime(q1)) {
      displayResult(E, delta, p1, q1);
      return;
    }

    if (step > 0n) {
      let p2 = center - step;
      let q2 = E - p2;
      if (p2 > 1n && isPrime(p2) && isPrime(q2)) {
        displayResult(E, delta, p2, q2);
        return;
      }
    }

    step += 1n;
  }

  document.getElementById("result").innerHTML = "No Goldbach pair found near prediction.";
}

function displayResult(E, delta, p, q) {
  const html = `
    <p><strong>δ(E) predicted:</strong> ${delta.toFixed(6)}</p>
    <p><strong>Predicted pair:</strong> (p = ${p}, q = ${q})</p>
    <p><strong>Check:</strong> p + q = ${p + q}</p>
  `;
  document.getElementById("result").innerHTML = html;
}
