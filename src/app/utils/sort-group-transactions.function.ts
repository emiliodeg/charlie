import { ITransaction } from '@app/models/transaction.model';

export function sortAndGroupBy(data: ITransaction[]) {
  return data
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .reduce((acc, item) => {
      if (!(item.date instanceof Date)) return acc;

      const [date] = new Date(item.date).toISOString().split('T');

      if (!acc.has(date)) {
        acc.set(date, []);
      }

      acc.get(date)!.push(item);

      return acc;
    }, new Map<string, ITransaction[]>());
}
