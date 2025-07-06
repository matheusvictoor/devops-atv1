import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, beforeEach } from "vitest";

import { Calculator } from "./Calculator";

describe("Calculator", () => {
  beforeEach(() => {
    render(<Calculator />);
  });

  it('deve renderizar com o display inicial "0"', () => {
    const display = screen.getByTestId('calculator-display');
    expect(display).toHaveTextContent('0');
  });

  it("deve exibir os números corretamente ao serem clicados", async () => {
    const user = userEvent.setup();

    await user.click(screen.getByText("7"));
    await user.click(screen.getByText("8"));
    await user.click(screen.getByText("9"));

    expect(screen.getByText("789")).toBeInTheDocument();
  });

  it('deve realizar uma operação de soma simples', async () => {
  const user = userEvent.setup();

  await user.click(screen.getByText('5'));
  await user.click(screen.getByText('+'));
  await user.click(screen.getByText('3'));
  await user.click(screen.getByText('='));

  const display = screen.getByTestId('calculator-display');
  expect(display).toHaveTextContent('8');
});

  it("deve realizar operações encadeadas", async () => {
    const user = userEvent.setup();

    await user.click(screen.getByText("1"));
    await user.click(screen.getByText("0"));
    await user.click(screen.getByText("×"));
    await user.click(screen.getByText("2"));
    await user.click(screen.getByText("+"));

    expect(screen.getByText("20")).toBeInTheDocument();

    await user.click(screen.getByText("5"));
    await user.click(screen.getByText("="));

    expect(screen.getByText("25")).toBeInTheDocument();
  });

  it("deve exibir um erro ao tentar dividir por zero", async () => {
    const user = userEvent.setup();

    await user.click(screen.getByText("9"));
    await user.click(screen.getByText("÷"));
    await user.click(screen.getByText("0"));
    await user.click(screen.getByText("="));

    expect(screen.getByText("Divisão por zero")).toBeInTheDocument();
  });

  it("deve limpar o estado de erro e iniciar um novo cálculo ao digitar um número", async () => {
    const user = userEvent.setup();
    await user.click(screen.getByText("9"));
    await user.click(screen.getByText("÷"));
    await user.click(screen.getByText("0"));
    await user.click(screen.getByText("="));

    expect(screen.getByText("Divisão por zero")).toBeInTheDocument();

    await user.click(screen.getByText("1"));
    await user.click(screen.getByText("5"));

    expect(screen.queryByText("Divisão por zero")).not.toBeInTheDocument();
    expect(screen.getByText("15")).toBeInTheDocument();
  });

  it("deve limpar o display e o estado ao clicar em AC", async () => {
    const user = userEvent.setup();

    await user.click(screen.getByText("1"));
    await user.click(screen.getByText("2"));
    await user.click(screen.getByText("+"));

    await user.click(screen.getByText("AC"));

    const display = screen.getByTestId("calculator-display");

    expect(display).toHaveTextContent("0");
  });
});
