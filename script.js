function loglog(x) {
  return Math.log(Math.log(x));
}

function isPrime(n) {
  if (n < 2n) return false;
  if (n === 2n) return true;
  if (n % 2n === 0n) return false;
  const sqrtN = BigInt(Math.floor(Number(n ** 0.5n)));
  for (let i = 3n; i <= sqrtN; i += 2n) {
    if (n % i === 0n) return false;
  }
  return true;
}

function predict() {
  const input = document.getElementById("evenInput").value.trim();
  const E = BigInt(input);
  if (E % 2n !== 0n || E <= 2n) {
    document.getElementById("result").innerHTML = "Please enter a valid even number greater than 2.";
    return;
  }

  const sqrtE = Math.sqrt(Number(E));
  const delta = sqrtE * loglog(Number(E)) / Math.log(Number(E));
  const deltaRounded = Math.round(delta);

  let pStart = E / 2n;
  let step = 0n;

  while (true) {
    const p1 = pStart + step;
    const p2 = pStart - step;
    if (p2 > 2n) {
      const q2 = E - p2;
      if (isPrime(p2) && isPrime(q2)) {
        displayResult(E, delta, p2, q2);
        return;
      }
    }
    if (p1 !== p2) {
      const q1 = E - p1;
      if (isPrime(p1) && isPrime(q1)) {
        displayResult(E, delta, p1, q1);
        return;
      }
    }
    step += 1n;
    if (step > 100000n) {
      document.getElementById("result").innerHTML = "No pair found in range.";
      return;
    }
  }
}

function displayResult(E, delta, p, q) {
  const result = `
    <p><strong>δ(E) predicted:</strong> ${delta.toFixed(6)}</p>
    <p><strong>Predicted pair:</strong> (p = ${p.toString()}, q = ${q.toString()})</p>
    <p><strong>Check:</strong> p + q = ${p + q}</p>
  `;
  document.getElementById("result").innerHTML = result;
}
